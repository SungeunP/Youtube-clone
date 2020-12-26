import Head from 'next/head'
import Layout from '../../components/layout'

const Video = () => {

  return (
    <Layout sidebar={false}>
      <Head>
        <title> Video title</title>
      </Head>

      <div id="first" className="yt-video">
        <div className="video-contents">
          <video className="video-viewer" />
          <div className="video-infos">
            <h3 className="video-title"> ※런던 현지인 반응※ 길에서 토트넘 손흥민(Son Heung-Min)을 만난다면?(ft. 월클 손흥민)ㅣ#손세이셔널 EP1 #03 </h3>
            <div className="video-meta">
              <p className="video-views"> 조회수 3,519,747회•2019. 5. 25. </p>
              <div className="video-actions">
                <div className="video-rate">

                </div>
                <button className="video-share">
                  공유
                </button>
                <button className="video-save-playlist">
                  저장
                </button>
                <button className="video-open-options">
                  
                </button>
              </div>
            </div>
          </div>
          
          <div className="channel-info">
          </div>
          
          <div className="comment">

          </div>

        </div>
        <div id="second" className="recog-videos">
          
        </div>
      </div>

      <style jsx>{`
        .yt-video {
          display: grid;
          grid-template-columns: calc(70% - 10px) calc(30% - 10px);
          grid-column-gap: 20px;
        }
        
        .video-contents {
          width: 100%;
        }
        .video-contents .video-infos {
          margin-top: 14px;
        }
        .video-contents video.video-viewer {
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .video-contents .video-infos .video-title {
          font-size: 18px;
          font-weight: normal;
        }
        .video-contents .video-infos .video-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
        .video-contents .video-infos .video-meta .video-views {
          display: inline-block;
          font-size: 0.9rem;
        }
        .video-contents .video-infos .video-meta .video-actions {
          display: inline-block;
        }
        
      `}</style>
    </Layout>
  )
}

export default Video