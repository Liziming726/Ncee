import Link from "next/link";
import styles from "./DefaultFooter.module.css";
import { Divider } from "antd";
import Image from "next/image";
import { Col, Row } from "antd";
import { GithubFilled, MessageOutlined } from "@ant-design/icons";

export default function DefaultFooter() {
  return (
    <>
      <div className={styles.app}>
        <Divider />
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
    </>
  );
}
