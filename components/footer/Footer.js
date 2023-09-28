import styles from "./Footer.module.css";
import DownloadButton from "../button/DownloadButton";

function Footer() {
  return (
    <div className={styles.footer_section}>
      <DownloadButton
        backgroundColor="var(--black-color)"
        forgroundColor="var(--white-color)"
      ></DownloadButton>
      <div className={styles.credits}>
        <p>❤️</p>
        <p>Made by Samarth for you!!</p>
        <p>Developed in India 🇮🇳</p>
      </div>
    </div>
  );
}

export default Footer;
