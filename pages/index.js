import Head from 'next/head'

import Link from 'next/link'
import ContentCard from '../components/contentCard'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hello world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="contents">

        <ContentCard  />
        <ContentCard  />
        <ContentCard  />
        <ContentCard  />

      </div>
    </Layout>
  )
}
