"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <main className={styles.main}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/textlogo.svg"
            alt="Next.js Logo"
            width={280}
            height={140}
            opacity={0.5}
            priority
          />
        </div>
        <Footer/> 
      </main>
    </>
  );
}
