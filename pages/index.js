import styles from "@/styles/Home.module.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import VideoSection from "./components/videoSection/VideoSection";
import Footer from "./components/footer/Footer";
import Head from "next/head";

export default function Home() {
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
