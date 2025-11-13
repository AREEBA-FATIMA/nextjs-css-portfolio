"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./work.module.css";
import { RiCodeLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { getProjects, type Project } from "@/lib/api";

export default function Work() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((data) => {
      if (data.length > 0) {
        setProjects(data);
      }
    });
  }, []);

  // Fallback projects if API fails
  const fallbackProjects = [
    {
      id: 1,
      title: "Portfolio",
      live_demo_url: "https://nextjs-portfolio-areeba-fatimas-projects.vercel.app/",
      github_url: "https://github.com/AREEBA-FATIMA/nextjs-portfolio",
      image_url: "/images/work-1.png",
      project_type: "Website",
      order: 0
    },
    {
      id: 2,
      title: "Credify Project",
      live_demo_url: "https://credify-project.vercel.app/",
      github_url: "https://github.com/AREEBA-FATIMA/Credify",
      image_url: "/images/work-2.png",
      project_type: "Website",
      order: 1
    },
    {
      id: 3,
      title: "CoachIQ Project",
      live_demo_url: "https://areeba-fatima.github.io/Coach-IQ/",
      github_url: "https://github.com/AREEBA-FATIMA/Coach-IQ",
      image_url: "/images/work-3.png",
      project_type: "Website",
      order: 2
    },
    {
      id: 4,
      title: "Personal Portfolio",
      live_demo_url: "https://areeba-fatima.github.io/Personal-Portfolio/",
      github_url: "https://github.com/AREEBA-FATIMA/Personal-Portfolio",
      image_url: "/images/work-4.png",
      project_type: "Website",
      order: 3
    },
    {
      id: 5,
      title: "Groco Project",
      live_demo_url: "https://areeba-fatima.github.io/grocery-shop/",
      github_url: "https://github.com/AREEBA-FATIMA/grocery-shop",
      image_url: "/images/work-5.png",
      project_type: "Website",
      order: 4
    },
    {
      id: 6,
      title: "Inwood Project",
      live_demo_url: "https://inwood-project.vercel.app/",
      github_url: "https://github.com/AREEBA-FATIMA/inwood-project",
      image_url: "/images/work-6.png",
      project_type: "Website",
      order: 5
    }
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects as Project[];

  return (
    <div className={styles.workPage}>
      <div className="caption">my work</div>
      <h1 className="heading">RECENT WORK</h1>
      <div className={styles.grid}>
        {displayProjects.map((project) => {
          const imageSrc = project.image_url || project.image || "/images/work-1.png";
          const isExternal = /^https?:\/\//.test(imageSrc);

          return (
            <div key={project.id} className={styles.card}>
              <Image
                src={imageSrc}
                alt={project.title}
                width={640}
                height={400}
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={project.order === 0}
                unoptimized={isExternal}
                loader={isExternal ? ({ src }) => src : undefined}
              />
              <div className={styles.overlayText}>
                <div>
                  <p>{project.title}</p>
                  <p className={styles.smallText}>{project.project_type}</p>
                </div>
                <div className={styles.overlayIcons}>
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      title="View Code"
                      aria-label={`View code for ${project.title.replace(/'/g, "&apos;")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiCodeLine />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.live_demo_url && (
                    <a
                      href={project.live_demo_url}
                      title="Live Demo"
                      aria-label={`View live demo for ${project.title.replace(/'/g, "&apos;")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineEye />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
