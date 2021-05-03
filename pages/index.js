import Head from 'next/head'

import Link from 'next/link'
import ContentCard from '../components/content/contentCard'
import ContentDivider from '../components/content/common/contentDivider'
import News from '../components/content/news'
import Layout from '../components/layout'
import Boards from '../components/content/boards'
import { useEffect } from 'react'
import { useState } from 'react'

const Video = () => {

  useEffect(() => {
    console.log('Get videos ..')
    
    fetch('/api/get/videos')
    .then(response => {
      console.log('Finish fetch videos >>', response)
      const { body } = response
      const reader = body.getReader()
      
    })
  })

  return (
    <Layout>
      <Head>
        <title>Youtube</title>
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
        
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />

        <Boards />

      </div>

    </Layout>
  )
}

export default Video