"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Main from "./components/Main/main";

import { useState } from "react";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import Center from "./components/Center/Center";
import UniversityMap from "./components/UniversityMap/UniversityMap";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          {/* logo position */}
          <div className={styles.logoo}>
            <Image
              className={styles.logo}
              src="/next.svg"
              // src="/textlogo.svg"
              alt="Next.js Logo"
              width={80}
              height={37}
              priority
            />
          </div>
          {/* Search */}
          <div>
            <p>
              <Search />
            </p>
          </div>
          {/* login and register */}
          <div>
            <a
              // href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Register isLogin={isLogin} />
              <Login setIsLogin={setIsLogin} />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          {/* <Center /> */}
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
      </main>
      <Main />
      {/* 大学位置 */}
      <UniversityMap />
      {/* 通用底部 */}
      <Footer />
    </>
  );
}
