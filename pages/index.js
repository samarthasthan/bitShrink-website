import styles from "@/styles/Home.module.css";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/videoSection/VideoSection";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import isAppleDevice from "../utils/DeviceDetect";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDevice } from "../store/slices/DeviceSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isApple = isAppleDevice();
    if (isApple) {
      dispatch(setDevice("apple"));
    } else {
      dispatch(setDevice("win"));
    }
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Head>
        <title>bitShrink: Image Compression to 20KB, 100KB, 50KB - Optimize Your Images</title>
        <meta name="description" content="Unlock swift image compression with bitShrink! Download our user-friendly tool to resize images effortlessly to 20KB, 100KB, or 50KB. Improve website speed and save storage space now!" />
      </Head>
      <Header></Header>
      <Hero></Hero>
      <VideoSection></VideoSection>
      <Footer></Footer>
    </div>
  );
}
