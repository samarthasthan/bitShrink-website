import styles from "../header/Header.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import DownloadButton from "../button/DownloadButton";

function Header() {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.logo_section}`}>
        <Image
          src={logo}
          alt="logo"
          className={`${styles.logo_icon}`}
          priority={true}
        ></Image>
        <p className={`${styles.logo_name}`}>bitShrink</p>
      </div>
      <div className={`${styles.menu}`}>
        <a
          href="mailto:samarthasthan27@gmail.com"
          className={`${styles.menu_btn}`}
        >
          Contact
        </a>
        <div className={styles.DownloadButton}>
          <DownloadButton
            backgroundColor="var(--border-color)"
            forgroundColor="var(--primary-color)"
          ></DownloadButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
