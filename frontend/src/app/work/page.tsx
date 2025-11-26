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
    // API function already includes fallback data
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  const displayProjects = projects.length > 0 ? projects : [];

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
