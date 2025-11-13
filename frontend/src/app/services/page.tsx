"use client";
import React, { useEffect, useState } from "react";
import styles from './service.module.css';
import { getServices, type Service } from "@/lib/api";
import * as Icons from 'react-icons/fa';
import type { IconType } from "react-icons";

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then((data) => {
      if (data.length > 0) {
        setServices(data);
      }
    });
  }, []);

  const getIcon = (iconLibrary: string, iconName: string) => {
    if (iconLibrary.toLowerCase() !== 'fa') {
      return null;
    }

    const iconMap = Icons as Record<string, IconType>;
    const IconComponent = iconMap[iconName];

    return IconComponent ? <IconComponent className={styles.icon} /> : null;
  };

  // Fallback services if API fails
  const fallbackServices = [
    { id: 1, title: "Innovative Ideas", description: "Unique solutions tailored to bring your vision to reality with creative strategies.", icon_name: "FaLightbulb", icon_library: "fa", color_class: "blue" },
    { id: 2, title: "Application Development", description: "We craft intuitive mobile apps that provide seamless user experiences.", icon_name: "FaMobileAlt", icon_library: "fa", color_class: "red" },
    { id: 3, title: "SEO Optimization", description: "Improve your website's ranking and online presence with proven SEO practices.", icon_name: "FaSearch", icon_library: "fa", color_class: "yellow" },
    { id: 4, title: "Pixel-perfect Design", description: "Delivering polished designs with attention to every detail.", icon_name: "FaDesktop", icon_library: "fa", color_class: "purple" },
    { id: 5, title: "Frontend Development", description: "Building responsive and engaging user interfaces with modern technologies.", icon_name: "FaCode", icon_library: "fa", color_class: "green" },
    { id: 6, title: "Backend Development", description: "Reliable and secure backend systems to power your web applications.", icon_name: "FaDatabase", icon_library: "fa", color_class: "navy" },
  ];

  const displayServices = services.length > 0 ? services : fallbackServices as Service[];

  return (
    <div className={styles.serviceContainer}>
      <p className="caption">What can I do?</p>
      <h1 className="heading">Here Are Some of My Expertise</h1>
      <div className={styles.grid}>
        {displayServices.map((service) => (
          <div key={service.id} className={`${styles.card} ${styles[`bd${service.color_class}`]}`}>
            <div className={`${styles.iconContainer} ${styles[service.color_class]}`}>
              {getIcon(service.icon_library, service.icon_name)}
            </div>
            <h2 className={styles.textTitle}>{service.title}</h2>
            <p className={styles.textDescription}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
