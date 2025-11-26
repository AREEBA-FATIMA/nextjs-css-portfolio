"use client";
import React, { useEffect, useState } from "react";
import styles from './service.module.css';
import { getServices, type Service } from "@/lib/api";
import * as Icons from 'react-icons/fa';
import type { IconType } from "react-icons";

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // API function already includes fallback data
    getServices().then((data) => {
      setServices(data);
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

  const displayServices = services.length > 0 ? services : [];

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
