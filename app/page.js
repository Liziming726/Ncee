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

        <div className={styles.grid}>
          <a
            href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <Main />
      {/* 大学位置 */}
      <UniversityMap />
    </>
  );
}
