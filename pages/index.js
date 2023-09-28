import styles from "@/styles/Home.module.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import VideoSection from "./components/videoSection/VideoSection";
import Footer from "./components/footer/Footer";
import Head from "next/head";
import isAppleDevice from "./utils/DeviceDetect";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDevice } from "./store/slices/DeviceSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isApple = isAppleDevice();
    if (isApple) {
      dispatch(setDevice("apple"));
    } else {
      dispatch(setDevice("win"));
    }
  }, []);

  return (
    <div className={styles.app}>
      <Head>
        <title>bitShrink</title>
      </Head>
      <Header></Header>
      <Hero></Hero>
      <VideoSection></VideoSection>
      <Footer></Footer>
    </div>
  );
}
