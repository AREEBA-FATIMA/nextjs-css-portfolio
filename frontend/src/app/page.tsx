"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Services from "./services/page";
import SkillsPage from "./skills/page";
import Work from "./work/page";
import { getHeroSlides, getProfile, type HeroSlide, type Profile } from "@/lib/api";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Fetch hero slides from API (with fallback built-in)
    getHeroSlides().then((data) => {
      setSlides(data);
    });

    // Fetch profile from API (with fallback built-in)
    getProfile().then((data) => {
      setProfile(data);
    });
  }, []);

  const displaySlides = slides.length > 0 ? slides : [];

  useEffect(() => {
    if (displaySlides.length === 0) return;
    
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % displaySlides.length);
        setIsFading(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [displaySlides.length]);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>(".sidebar-menu nav a");
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <section className="hero" id="home">
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={25} color="#333" /> : <AiOutlineMenu size={25} color="#333" />}
        </div>

        {isMenuOpen && (
          <aside className="sidebar-menu">
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
                  <a href="#home" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <p className="copy">
              &copy; Copyright 2024 All rights reserved. <br /> Made with{" "}
              <span style={{ color: "red" }}>❤️</span> by Areeba Fatima
            </p>
          </aside>
        )}

        {displaySlides.length > 0 && (
          <div className={`slide ${isFading ? "fade-out" : "fade-in"}`}>
            <h1>
              {displaySlides[currentSlide].heading}
              <br />
              {displaySlides[currentSlide].sub_heading}
            </h1>
            <p>{displaySlides[currentSlide].paragraph}</p>
            <button
              className="portfolioButton"
              onClick={() => {
                const target = document.getElementById(displaySlides[currentSlide].target_section);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {displaySlides[currentSlide].button_text}
            </button>
          </div>
        )}
      </section>

      <div id="about">
        <AboutPage />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="skills">
        <SkillsPage />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
};

export default HomePage;
