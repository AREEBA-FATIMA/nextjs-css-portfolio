"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa"; // Removed map icon import
import emailjs from "@emailjs/browser"; // Import EmailJS
import styles from "./contact.module.css";
import { getProfile, type Profile } from "@/lib/api";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string>("");
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then((data) => {
      if (data) {
        setProfile(data);
      }
    });
  }, []);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Try sending to Django backend first
      const { sendContactMessage } = await import("@/lib/api");
      await sendContactMessage(formData);
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      // Fallback to EmailJS if backend fails
      console.error("Backend Error: ", error);
      emailjs
        .send(
          "areeba_fatima", // Your Service ID
          "areeba-fatima", // Your Template ID
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          "2-ffOv2-Xbt1BVHtX" // Your Public Key
        )
        .then(
          () => {
            setStatusMessage("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
          },
          (error) => {
            console.error("EmailJS Error: ", error);
            setStatusMessage("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <section className={styles.contactSection}>
      {/* Heading Section */}
      <div className={styles.headingContainer}>
        <h3 className="caption">Get in Touch</h3>
        <h2 className="heading">Contact</h2>
      </div>

      <div className={styles.contactContainer}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <FaEnvelope size={30} color="#2C98F0" />
            </div>
            <p className={styles.infoText}>{profile?.email || "areebafatima2457@gmail.com"}</p>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <FaPhoneAlt size={30} color="#2C98F0" />
            </div>
            <p className={styles.infoText}>{profile?.phone || "0314-7837079"}</p>
          </div>
          {profile?.linkedin_url && (
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <FaLinkedin size={30} color="#2C98F0" />
              </div>
              <p className={styles.infoText}>
                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2C98F0" }}
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.inputField}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.inputField}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={styles.inputField}
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                className={styles.inputField}
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
          {statusMessage && (
            <p className={styles.statusMessage}>
              {statusMessage.replace(/'/g, "&apos;")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
