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
          {/* <div className={styles.grid}>
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
          </div> */}
          <div className={styles.grid}>
            {/* <Image
            className={styles.logoo}
            src="/about/para5.png"
            alt="para5.png"
            width={1200}
            height={250}
            opacity={0.5}
            priority
          /> */}
            <span className={styles.intro}>
              叶子和高考志愿有许多共同之处。就像叶子展现出个体的独特风姿一样，每个人也在成长过程中展示自己的个性。时间的推移让叶子逐渐变色掉落，而在高考志愿的路上，我们也必须做出困难的选择。
              选择专业时，我们需慎重考虑兴趣、职业规划，做出科学合理的决策。这就像叶子在成长和繁荣后进入相对萎靡期时，依然保持生命基因，准备迎接成熟的下一阶段。
              叶子的品种和形态也能给我们启示。了解叶子的形态、纹理和颜色，培养更丰富的审美观念。同样，选择高考志愿需要积累知识和经验，以全面、客观、务实的态度填报志愿。
              叶子还能帮助辨识植物品种，而在填报高考志愿时，我们需要研究录取情况和就业前景，确定各专业区域的发展趋势和空间。
              因此，叶子和高考志愿可以从多个方面联系起来。它们都要求我们做出理性的判断和决策。通过深入了解大自然中的叶子，可以激发我们对未来志愿选择的启示，为自己的人生道路树立信心和动力。
            </span>
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
