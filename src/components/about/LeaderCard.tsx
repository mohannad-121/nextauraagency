"use client";

import Image from "next/image";
import { Founder } from "@/data/founders";
import styles from "./LeaderCard.module.css";
import { Mail } from "lucide-react";

interface LeaderCardProps {
  founder: Founder;
}

export function LeaderCard({ founder }: LeaderCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <a
          href={founder.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mail}
          title={`Message ${founder.name}`}
          aria-label={`Message ${founder.name}`}
        >
          <Mail />
        </a>

        <div className={styles.profilePic}>
          <Image
            src={founder.image}
            alt={founder.name}
            width={350}
            height={350}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className={styles.bottom}>
          <div className={styles.content}>
            <span className={styles.roleBadge}>{founder.role}</span>
            <span className={styles.name}>{founder.name}</span>
            <span className={styles.aboutMe}>{founder.bio}</span>
          </div>

          <div className={styles.bottomBottom}>
            <div className={styles.socialLinksContainer}>
              {/* Instagram */}
              <a
                href={founder.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={founder.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={founder.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={founder.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.2.3-.778.98-1.028 1.205-.251.226-.502.251-.803.1-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.3-.502.101-.201.051-.376-.025-.527-.075-.15-.678-1.631-.929-2.233-.244-.587-.493-.507-.678-.517-.175-.01-.376-.01-.577-.01s-.527.075-.803.376c-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.229 3.113.15.201 2.124 3.243 5.146 4.549.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.306.176-1.431-.076-.125-.276-.2-.577-.351zm-5.467 7.618h-.005c-1.859 0-3.682-.5-5.275-1.446l-.378-.224-3.923 1.029 1.047-3.824-.246-.391a10.457 10.457 0 0 1-1.603-5.592c0-5.787 4.71-10.496 10.499-10.496 2.805 0 5.441 1.092 7.424 3.076a10.43 10.43 0 0 1 3.072 7.424c0 5.79-4.712 10.5-10.503 10.5zM20.52 3.479A11.93 11.93 0 0 0 12.005 0C5.385 0 0 5.385 0 12.006c0 2.112.551 4.175 1.598 5.992L0 24l6.166-1.617a11.956 11.956 0 0 0 5.839 1.517h.005c6.619 0 12.005-5.386 12.005-12.007 0-3.208-1.25-6.224-3.495-8.414z" />
                </svg>
              </a>
            </div>

            <a
              href={founder.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
