import Link from "next/link";
import styles from "./HomeFooter.module.css";
import { Divider } from "antd";
import Image from "next/image";
import { Col, Row } from "antd";
import { GithubFilled, MessageOutlined } from "@ant-design/icons";
//引入framer-motion动画库
import { motion } from "framer-motion";

export default function Footer() {
  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <div className={styles.app}>
          <Divider />
          <p className={styles.desc} style={{ fontWeight: "600" }}>
            关于我们
          </p>
          <h1 className={styles.text}>志愿叶</h1>
          <div className={styles.grid}>
            <Image
              className={styles.logo}
              src="/about/para1.png"
              alt="para1.png"
              width={291}
              height={180}
              opacity={0.5}
              priority
            />
            <Image
              className={styles.logo}
              src="/about/para2.png"
              alt="para2.png"
              width={291}
              height={180}
              opacity={0.5}
              priority
            />
            <Image
              className={styles.logo}
              src="/about/para3.png"
              alt="para3.png"
              width={291}
              height={180}
              opacity={0.5}
              priority
            />
            <Image
              className={styles.logo}
              src="/about/para4.png"
              alt="para4.png"
              width={291}
              height={180}
              opacity={0.5}
              priority
            />
          </div>
          <div className={styles.grid}>
            <Image
            className={styles.logoo}
            src="/about/para5.png"
            alt="para5.png"
            width={1200}
            height={250}
            opacity={0.5}
            priority
          />
          </div>

          <Divider>
            <Image
              className={styles.logo}
              src="/textlogo.svg"
              alt="textlogo.svg"
              width={50}
              height={25}
              opacity={0.5}
              priority
            />
          </Divider>
          <Row className={styles.center}>
            <Col span={8}>
              <p className={styles.desc}>
                © 2023 YeZy - MIT License. All rights reserved.
              </p>
            </Col>
            <Col span={8}>
              <p className={styles.desc}>京ICP备2022001803号</p>
            </Col>
            <Col span={8}>
              <p className={styles.desc}>
                <a
                  href="https://github.com/Liziming726/Ncee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubFilled
                    style={{ color: "rgb(66,66,66)", fontSize: "1rem" }}
                  />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="mailto:2931645738@qq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageOutlined
                    style={{ color: "rgb(66,66,66)", fontSize: "1rem" }}
                  />
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </motion.div>
    </>
  );
}
