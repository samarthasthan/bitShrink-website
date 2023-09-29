import React from "react";
import styles from "./VideoSection.module.css";
import Image from "next/image";
import appleLogo from "../../public/apple-primary.svg";
import video from "../../public/videos/video.webm";
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
          <Image
            width="60"
            height="60"
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-free-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
            alt="external-free-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev"
          />
          <p>Free of Cost</p>
        </div>
        <div className={styles.feature}>
          <Image
            width="60"
            height="60"
            src="https://img.icons8.com/ios/60/happy--v1.png"
            alt="happy--v1"
          />
          <p>User-Friendly Interface</p>
        </div>
        <div className={styles.feature}>
          <Image
            width="60"
            height="60"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/60/000000/external-Images-images-and-image-files-those-icons-lineal-those-icons-2.png"
            alt="external-Images-images-and-image-files-those-icons-lineal-those-icons-2"
          />
          <p>Batch Compression</p>
        </div>
        <div className={styles.feature}>
          <Image
            width="60"
            height="60"
            src="https://img.icons8.com/ios/50/running-rabbit.png"
            alt="running-rabbit"
          />
          <p>Fast Compression</p>
        </div>
        <div className={styles.feature}>
          <Image
            width="60"
            height="60"
            src="https://img.icons8.com/external-outline-wichaiwi/60/000000/external-development-business-continuity-plan-outline-wichaiwi.png"
            alt="external-development-business-continuity-plan-outline-wichaiwi"
          />
          <p>Optimized Output</p>
        </div>
        <div className={styles.feature}>
          <Image
            width="60"
            height="60"
            src="https://img.icons8.com/ios/50/000000/virus-free.png"
            alt="virus-free"
          />
          <p>Malware-Free</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
