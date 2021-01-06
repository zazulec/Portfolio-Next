import Head from 'next/head'
import Image from 'next/image';
import styles from './index.module.scss';
import { AppLayout } from '../layouts/AppLayout/AppLayout';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Portfolio Paweł Zarzycki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <section className={styles.wrapper}>
          <div className={styles.hero}>
            <div className={styles.personalInfo}>
              <p>
                <span>I am,</span>
                <br></br>
                <span>Paweł Zarzycki</span>
              </p>
              <div className={styles.socials}>
                <Link href="https://linkedin.com/in/paweł-zarzycki" >
                  <LinkedinOutlined className={styles.linkedin} />
                </Link>
                <Link href="https://github.com/zazulec" >
                  <GithubOutlined className={styles.linkedin} />
                </Link>
              </div>
            </div>
            <Image
              className={styles.image}
              src='/static/photo.png'
              alt="Picture of the author"
              quality={100}
              width={400}
              height={500} />
          </div>
          <div className={styles.content}>
            <h1>Frontend developer</h1>
            <p>I have been thinking about the IT industry for a long time, but due to professional commitments, I could not make the decision to change the industry before. In recent months, I have successfully completed a programming course and had knowledge at the Junior Front-end Developer level. Currently, my goal is to start work as soon as possible to use the newly learned knowledge in full-fledged projects and learn new issues.</p>
          </div>
        </section>
      </AppLayout>
    </div>
  )
}
