import Head from 'next/head'
import Image from 'next/image';
import styles from './index.module.scss';
import { AppLayout } from '../layouts/AppLayout/AppLayout';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  console.log("@@@@@@", router)
  return (
    <div className={styles.home}>
      <Head>
        <title>Portfolio Paweł Zarzycki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div className="custColorText">
          {/* <Image
            src='/static/photo.png'
            alt="Picture of the author"
            width={300}
            height={300} /> */}
        </div>
      </AppLayout>
    </div>
  )
}
