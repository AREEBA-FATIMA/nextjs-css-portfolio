"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";
import { getProfile, type Profile } from "@/lib/api";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    getProfile().then((data) => {
      if (data) {
        setProfile(data);
      }
    });
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const nextTheme = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="main-box">
          <div className="container">
            {/* Sidebar */}
            <aside className="sidebar">
              <div className="profile">
                <Image
                  src={profile?.profile_image || "/images/me-5.png"}
                  alt="Profile"
                  width={130}
                  height={130}
                  className="profileImage"
                />
                <h2>{profile?.name || "Areeba Fatima"}</h2>
                <p>{profile?.title || "Full Stack & AI-Driven Web Developer"}</p>
              </div>
              <nav>
                <ul>
                  <li>
                    <a
                      href="#home"
                      className={activeSection === "home" ? "active" : ""}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className={activeSection === "about" ? "active" : ""}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className={activeSection === "services" ? "active" : ""}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className={activeSection === "skills" ? "active" : ""}
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#work"
                      className={activeSection === "work" ? "active" : ""}
                    >
                      Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className={activeSection === "contact" ? "active" : ""}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <button onClick={toggleTheme} style={{marginTop: 16, padding: '8px 12px', cursor: 'pointer'}}>
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'} Mode
              </button>
              <p className="copy">
                &copy; Copyright 2024 All rights reserved. <br /> Made with{" "}
                <span style={{ color: "red" }}>❤️</span> by Areeba Fatima
              </p>
            </aside>

            {/* Main Content */}
            <main className="main">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
