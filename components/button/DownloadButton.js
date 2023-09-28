import React from "react";
import Image from "next/image";
import styles from "./DownloadButton.module.css";
import { useSelector } from "react-redux";
import appleLogo from "../../public/apple-white.svg";
import appleLogoPrimary from "../../public/apple-primary.svg";
import windowsLogoPrimary from "../../public/windows-primary.svg";
import windowsLogo from "../../public/windows-white.svg";
import DownloadFile from "@/utils/DownloadFile";

function DownloadButton(props) {
  let logo, downloadDevice;
  const device = useSelector((state) => state.device.value);
  const background = {
    backgroundColor: props.backgroundColor,
  };
  const forground = {
    color: props.forgroundColor,
  };
  if (props.reverse !== true) {
    if (device === "apple") {
      downloadDevice = "Mac";
      if (forground.color === "var(--primary-color)") {
        logo = appleLogoPrimary;
      } else {
        logo = appleLogo;
      }
    } else {
      downloadDevice = "Windows";
      if (forground.color === "var(--primary-color)") {
        logo = windowsLogoPrimary;
      } else {
        logo = windowsLogo;
      }
    }
  } else {
    if (device === "apple") {
      downloadDevice = "Windows";
      if (forground.color === "var(--primary-color)") {
        logo = windowsLogoPrimary;
      } else {
        logo = windowsLogo;
      }
    } else {
      downloadDevice = "Mac";
      if (forground.color === "var(--primary-color)") {
        logo = appleLogoPrimary;
      } else {
        logo = appleLogo;
      }
    }
  }

  return (
    <div
      className={`${styles.download_button}`}
      style={background}
      onClick={() => {
        downloadDevice === "Mac" ? DownloadFile("apple") : DownloadFile("win");
      }}
    >
      <Image src={logo} alt="logo" className={`${styles.system_icon}`}></Image>
      <p className={`${styles.system_names}`} style={forground}>
        {`Download for ${downloadDevice}`}
      </p>
    </div>
  );
}

export default DownloadButton;
