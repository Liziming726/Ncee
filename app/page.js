"use client"
import Image from "next/image"
import styles from "./page.module.css"
import Main from "./components/Main/main"
import Carousel from "./components/Carousel/Carousel"
import { useState } from "react"
import Gongneng from "./components/Gongneng/Gongneng"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Search from "./components/Search/Search"
import Center from "./components/Center/Center"
import HomeFooter from "./components/HomeFooter/HomeFooter"
import { CommentOutlined, BulbOutlined } from "@ant-design/icons"
import { FloatButton } from "antd"
import Timeline from "./components/Timeline/Timeline"
import Zixun1 from "./components/zixun/zixun"
export default function Home () {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          {/* logo position */}
          <div className={styles.logoo}>
            <Image
              className={styles.logo}
              src="/logo1.jpg"
              alt="Logo"
              width={130}
              height={80}
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <Register isLogin={isLogin} />
              <Login setIsLogin={setIsLogin} />
            </a>
          </div>
        </div>
        {/* 轮播图 */}



        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '900px', height: '560px', marginTop: '40px', marginBottom: '-80px', marginRight: '40px' }}>
            <Carousel></Carousel>
          </div>
          <div style={{ width: '250px', height: '400px', marginTop: '27px', marginBottom: '-80px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>志愿填报时间轴</h2>
            <Timeline></Timeline>
          </div>
        </div>
        {/* float button */}
        <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{
            right: 24,
          }}
          icon={<BulbOutlined />}
        >
          <FloatButton />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
      </main>
      <Gongneng></Gongneng>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '80px', fontSize: '50px' }}>高考资讯</h1>


      </div>

      <div>
        <Zixun1></Zixun1>
      </div>

      {/* 通用底部 */}
      <HomeFooter />
      {/* <School/> */}
    </>
  )
}
