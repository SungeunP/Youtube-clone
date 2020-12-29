import Head from 'next/head'
import Link from 'next/link'
import VideoHashTag from '../../components/content/common/VideoHashTag'
import Layout from '../../components/layout'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ContentCard from '../../components/content/contentCard';

const Video = () => {

  return (
    <Layout sidebar={false}>
      <Head>
        <title> Video title</title>
      </Head>

      <div className="yt-video">
        <div className="video-contents">
          <video className="video-viewer" />
          <div className="video-infos">
            <div className="video-tags">
              <VideoHashTag text={'#손흥민'} />
            </div>
            <h3 className="video-title"> ※런던 현지인 반응※ 길에서 토트넘 손흥민(Son Heung-Min)을 만난다면?(ft. 월클 손흥민)ㅣ#손세이셔널 EP1 #03 </h3>
            <div className="video-meta">
              <p className="video-views"> 조회수 3,519,747회•2019. 5. 25. </p>
              <div className="video-actions">
                <div className="video-rate">
                  <div className="rate-btns">
                    <button className="action-btn">
                      <ThumbUpIcon />
                      <span>300</span>
                    </button>
                    <button className="action-btn">
                      <ThumbDownIcon />
                      <span> 5 </span>
                    </button>
                    <div className="video-positive-bar"></div>
                  </div>
                </div>
                <button className="action-btn video-share">
                  <ShareIcon />
                  <span>공유</span>
                </button>
                <button className="action-btn video-save-playlist">
                  <PlaylistAddIcon />
                  <span>저장</span>
                </button>
                <button className="action-btn video-open-options">
                  <MoreHorizIcon />
                </button>
              </div>
            </div>
          </div>
          
          <div className="channel-info">
            
          </div>
          
          <div className="comment">

          </div>

        </div>
        <div className="recog-videos">
          <ContentCard type="hor" />
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
          margin-top: 12px;
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
          /* margin-top: 10px; */
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .video-contents .video-infos .video-meta .video-views {
          display: inline-block;
          font-size: 0.9rem;
          line-height: 2rem;
        }
        .video-contents .video-infos .video-meta .video-actions {
          display: inline-block;
        }
        .video-contents .video-infos .video-meta .video-actions .video-rate {
          display: inline-block;
          width: 135px;
          border-bottom: 1px solid #606060;
        }
        .video-contents .video-infos .video-meta .video-actions .video-rate .rate-btns button {
          width: 50%;
          padding-right: 0px;
        }
        .video-contents .video-infos .video-meta .video-actions button span {
        /* .video-contents .video-infos .video-meta .video-actions .video-rate .rate-btns button span { */
          vertical-align: top;
          line-height: 24px;
          margin-left: 6px;
          font-weight: bold;
          font-size: 0.9rem;
          /* margin-top: 4px; */
        }
        .video-contents .video-infos .video-meta .video-actions .action-btn {
          padding: 10px 10px;
          color: #909090;
        }
      `}</style>
    </Layout>
  )
}

export default Video