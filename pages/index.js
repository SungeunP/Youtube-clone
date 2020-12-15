import Head from 'next/head'

import Link from 'next/link'
import ContentCard from '../components/content/contentCard'
import ContentDivider from '../components/content/common/contentDivider'
import News from '../components/content/news'
import Layout from '../components/layout'
import Boards from '../components/content/boards'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hello world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="contents">

        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />

        <News />

        <Boards />

      </div>
    </Layout>
  )
}
