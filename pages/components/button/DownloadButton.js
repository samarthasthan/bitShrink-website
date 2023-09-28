import React from "react";
import Image from "next/image";
import styles from "./DownloadButton.module.css";

function DownloadButton(props) {
  const background = {
    backgroundColor: props.backgroundColor,
  };
  const forground = {
    color: props.forgroundColor,
  };
  return (
    <div className={`${styles.download_button}`} style={background}>
      <Image
        src={props.logo}
        alt="logo"
        className={`${styles.system_icon}`}
      ></Image>
      <p className={`${styles.system_names}`} style={forground}>
        {`Download for ${props.systemName}`}
      </p>
    </div>
  );
}

export default DownloadButton;
