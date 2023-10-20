import React from "react";
import styles from "./VideoSection.module.css";
import Image from "next/image";
import video from "../../public/videos/video.mp4";
import DownloadFile from "@/utils/DownloadFile";

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
      <div className={styles.content}>
        <h1>&quot;bitShrink: Image Compression to 20KB, 100KB, 50KB&quot;</h1>
        <p>Unlock the power of swift image compression with bitShrink! Our user-friendly tool optimizes your website&apos;s visuals with just a few clicks.</p>
        <div className={styles.sub_content}>
          <h2>Key Features:</h2>
          <p>
          <strong>1. Perfect Image Compression:</strong> bitShrink excels in resizing images to your desired size, ensuring they stay under 20KB, 100KB, or 50KB. Say goodbye to hefty image files without compromising quality.
          </p>
          <p>
          <strong>2. User-Friendly Interface:</strong> Shrink, Don&apos;t Sink! Our tool&apos;s interface makes image compression a breeze. With a few clicks, reduce file sizes, keeping your website fast and storage clutter-free.
          </p>
          <p>
          <strong>3. Tailor Your Compression:</strong> Whether targeting 20KB, 100KB, or 50KB, bitShrink adapts to your needs. Customize your image compression effortlessly.
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>Why Choose bitShrink?</h2>
          <p>
          <strong>1. Efficiency at its Core:</strong> bitShrink guarantees hassle-free image compression. Shrink your images without the complexities of traditional tools.
          </p>
          <p>
          <strong>2. Shrink, Don&apos;t Sink!:</strong> Maintain visual integrity while reducing file sizes. Your images may shrink, but their impact won&apos;t.
          </p>
          <p>
          <strong>3. Download for Mac and Windows:</strong> Enjoy the convenience of using bitShrink on both Mac and Windows. Download now and experience the difference!
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>In order to start:</h2>
          <p>
          <strong>1. Mac:</strong> <span onClick={()=>{DownloadFile("apple")}}>Download</span>
          </p>
          <p>
          <strong>2. Windows:</strong> <span onClick={()=>{DownloadFile("win")}}>Download</span>
          </p>
          <p>
          Optimize your website, save storage space, and enhance user experience with bitShrink. Compress images the smart way!
          <br />
          With bitShrink, image compression is not just a task; it&apos;s a solution. Download now and see the impact of shrinking without sinking!
          <Image src='/logo.png' alt="bitShrink Image Compressor 20KB" title="bitShrink Image Compressor 20KB" width={0} height={0}></Image>
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>Why 20KB Matters:</h2>
          <p>
          In the digital world, speed is crucial. Websites with heavy images risk slow loading times, impacting user experience and SEO rankings. Compressing images to 20KB strikes a balance, ensuring swift loading without compromising quality.
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>bitShrink&apos;s Precision Compression:</h2>
          <p>
          bitShrink simplifies image compression, catering to your needs, especially in compressing images to 20KB, 100KB, or 50KB. Imagine a visually stunning website that loads at lightning speed, thanks to bitShrink.
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>Beyond 20KB:</h2>
          <p>While focusing on 20KB, bitShrink extends its prowess to compressing images to 100KB and 50KB. Choose the optimization level that suits your needs.
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>Navigating the bitShrink Experience:</h2>
          <p>
          Shrink, Don&apos;t Sink! The ethos of bitShrink is reducing file sizes without compromising visual integrity. Our user-friendly interface empowers you to navigate effortlessly.
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>The Impact of Size on SEO:</h2>
          <p>
          Search engines prioritize user experience, and page loading speed matters. Compressing images to 20KB enhances user experience and boosts SEO rankings.
          </p>
        </div>
        <div className={styles.sub_content}>
          <h2>Unlocking Possibilities:</h2>
          <p>
          In a digital era where every kilobyte counts, bitShrink unlocks possibilities. Download for Mac or Windows and witness your website&apos;s transformation.
          </p>
        </div>
        <p><strong>Join us on this optimization journey. Shrink the unnecessary, retain the essence, and let bitShrink redefine image compression. Download now and experience visual excellence, one kilobyte at a time.</strong></p>
      </div>
    </div>
  );
}

export default VideoSection;
