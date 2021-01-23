import Head from "next/head"
import Layout from "../../components/layout"

const Channel = (props) => {

  return (
    <Layout>
      <Head> 
        <title> Channel name - YouTube </title>
      </Head>
      <div className="channel">
        <div className="channel-bg-img">
        </div>
        
        <div className="channel-contents">
          <div className="tit-act-grid">
            <div className="channel-title">
              <div className="channel-title-img">
                <img src="./profile-img.jpg" />
              </div>
              <div className="channel-title-text">
                <h1> LCK </h1>
                <p> 구독자 <span className="subs-count">60</span>만명 </p>
              </div>
            </div>
            <div className="channel-act">
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Channel