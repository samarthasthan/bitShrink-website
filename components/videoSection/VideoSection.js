import React from "react";
import styles from "./VideoSection.module.css";
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
        src="https://asthan-my.sharepoint.com/:v:/g/personal/samarth_asthan_onmicrosoft_com/Ed0AgnBSVfZJn-tuJSv8pqABH719ZGvucilEn4AMcl2xuQ?download=1"
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
