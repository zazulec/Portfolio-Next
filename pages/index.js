import Head from 'next/head'
import { Layout } from '../layouts/Layout'


export default function Home() {
  return (
    <div className="flex flex-col custBgGrey min-h-screen">
      <Head>
        <title>Portfolio Paweł Zarzycki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Layout>

     </Layout>
    </div>
  )
}
