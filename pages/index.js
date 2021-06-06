import Head from 'next/head'

import Link from 'next/link'
import ContentCard from '../components/content/contentCard'
import ContentDivider from '../components/content/common/contentDivider'
import News from '../components/content/news'
import Layout from '../components/layout'
import Boards from '../components/content/boards'
import { useEffect } from 'react'
import { useState } from 'react'
import FeedRenderer from '../components/content/feedRenderer'

const Video = () => {

  const [ videos, setVideos ] = useState(undefined)

  useEffect(() => {
    if (videos === undefined) {
      fetch('/api/get/videos')
      .then(response => { return response.json()})
      .then(res => {
        const { videos:_videos } = res
        setVideos(_videos)
      })
    }
  })

  return (
    <Layout>
      <Head>
        <title>Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="contents">

        <FeedRenderer contents={videos} />

        {/* <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard /> */}

        {/* <News /> */}
        
        {/* <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard /> */}

        {/* <Boards /> */}

      </div>

    </Layout>
  )
}

export default Video