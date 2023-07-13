import { Carousel } from 'antd'
import styles from './Carousel.module.css'
import Image from 'next/image'
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '900px',
  float: 'left'
}
const lbt = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="/lbt1.jpeg"
          alt="lbt1.jpeg"
          className={styles.vercelLogo}
          width={900}
          height={400}
          priority
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="/lbt2.jpeg"
          alt="lbt2.jpeg"
          className={styles.vercelLogo}
          width={900}
          height={400}
          priority
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="/lbt3.png"
          alt="/lbt3.png"
          className={styles.vercelLogo}
          width={900}
          height={400}
          priority
        />
      </h3>
    </div>
  </Carousel>
)
export default lbt