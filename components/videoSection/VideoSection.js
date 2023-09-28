import React from "react";
import styles from "./VideoSection.module.css";
import video from "../../public/videos/video.mov";
import Image from "next/image";
import appleLogo from "../../public/apple-primary.svg";
function VideoSection() {
  return (
    <div className={styles.video_section}>
      <video
        autoPlay
        muted
        loop
        playsInline
        src={video}
        type="video/mp4"
        className={styles.video}
      />
      <div className={styles.features_section}>
        <div className={styles.feature}>
          <Image src={appleLogo} alt="feature" height={70} width={70}></Image>
          <p>Hassle-free time tracking</p>
        </div>
        <div className={styles.feature}>
          <Image src={appleLogo} alt="feature" height={70} width={70}></Image>
          <p>Hassle-free time tracking</p>
        </div>
        <div className={styles.feature}>
          <Image src={appleLogo} alt="feature" height={70} width={70}></Image>
          <p>Hassle-free time tracking</p>
        </div>
        <div className={styles.feature}>
          <Image src={appleLogo} alt="feature" height={70} width={70}></Image>
          <p>Hassle-free time tracking</p>
        </div>
        <div className={styles.feature}>
          <Image src={appleLogo} alt="feature" height={70} width={70}></Image>
          <p>Hassle-free time tracking</p>
        </div>
        <div className={styles.feature}>
          <Image src={appleLogo} alt="feature" height={70} width={70}></Image>
          <p>Hassle-free time tracking</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;