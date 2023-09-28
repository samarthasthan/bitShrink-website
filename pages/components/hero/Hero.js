import React from "react";
import styles from "./Hero.module.css";
import DownloadButton from "../button/DownloadButton";
import appleLogo from "../../../public/apple-white.svg";
import windowsLogo from "../../../public/windows-primary.svg";
function Hero() {
  return (
    <div className={`${styles.hero_section}`}>
      <div className={`${styles.content}`}>
        <p className={styles.text}>
          A tiny time tracker for your next big project
        </p>
        <div className={styles.buttons}>
          <DownloadButton
            backgroundColor="var(--black-color)"
            forgroundColor="var(--white-color)"
            systemName="Mac"
            logo={appleLogo}
          ></DownloadButton>
          <DownloadButton
            backgroundColor="var(--border-color)"
            forgroundColor="var(--primary-color)"
            systemName="Windows"
            logo={windowsLogo}
          ></DownloadButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
