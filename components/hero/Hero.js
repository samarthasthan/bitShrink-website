import styles from "./Hero.module.css";
import DownloadButton from "../button/DownloadButton";

function Hero() {
  return (
    <div className={`${styles.hero_section}`}>
      <div className={`${styles.content}`}>
        <p className={styles.text}>
          {`Shrink, Don't Sink! Compressing images made simple`}
        </p>
        <div className={styles.buttons}>
          <DownloadButton
            backgroundColor="var(--black-color)"
            forgroundColor="var(--white-color)"
          ></DownloadButton>
          <DownloadButton
            backgroundColor="var(--border-color)"
            forgroundColor="var(--primary-color)"
            reverse={true}
          ></DownloadButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
