"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Services from "./services/page";
import SkillsPage from "./skills/page";
import Work from "./work/page";

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const slides = [
    {
      heading: "I am a",
      subHeading: "Web Developer",
      paragraph:
        "Passionate about building modern web applications using Next.js, React, and TypeScript. I focus on creating fast, efficient, and scalable solutions tailored to user needs.",
      buttonText: "Explore My Work",
      targetSection: "work",
    },
    {
      heading: "I Build",
      subHeading: "Frontend & Backend",
      paragraph:
        "Skilled in frontend and backend development, with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js. I create seamless, responsive applications that perform optimally on all devices.",
      buttonText: "Learn More",
      targetSection: "about",
    },
    {
      heading: "I Design",
      subHeading: "UI/UX with Figma",
      paragraph:
        "With a keen eye for design, I create user interfaces that are intuitive, visually appealing, and functional. I use Figma to design high-quality UI/UX for responsive web applications.",
      buttonText: "View My Designs",
      targetSection: "skills",
    },
    {
      heading: "I Optimize",
      subHeading: "Explore My Work",
      paragraph:
        "I specialize in optimizing web applications for SEO and performance, ensuring fast loading times and better search engine rankings to enhance user experience.",
      buttonText: "See How I Optimize",
      targetSection: "services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsFading(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
                src="/images/me-5.png"
                alt="Profile"
                width={130}
                height={130}
                className="profileImage"
              />
              <h2>Areeba Fatima</h2>
              <p>Web Developer</p>
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

        <div className={`slide ${isFading ? "fade-out" : "fade-in"}`}>
          <h1>
            {slides[currentSlide].heading}
            <br />
            {slides[currentSlide].subHeading}
          </h1>
          <p>{slides[currentSlide].paragraph}</p>
          <button
            className="portfolioButton"
            onClick={() => {
              const target = document.getElementById(slides[currentSlide].targetSection);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {slides[currentSlide].buttonText}
          </button>
        </div>
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
