import Head from 'next/head'
import Layout from '../../components/layout'

const Video = () => {

  return (
    <Layout sidebar={false}>
      <Head>
        <title> Video title</title>
      </Head>

      <div>
        <p> Video page </p>
      </div>
    </Layout>
  )
}

export default Video