import Head from 'next/head'
import Link from 'next/link'
import VideoHashTag from '../../components/content/common/VideoHashTag'
import Layout from '../../components/layout'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

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
            <div id="channel-profile-img-area">
              <img src="./profile-img.jpg" className="profile-img" />
            </div>
            <div id="channel-info-area">
              <div className="title-wrap">
                <div>
                  <span className="channel-name"> 이스타TV </span>
                  <p className="channel-sub-count"> 구독자 <span> 35.4만명</span></p>
                </div>
                <div>
                  <button className="channel-pay-sub"> 가입 </button>
                  <button className="channel-sub"> 구독 </button>
                  <button className="channel-alert">
                    <NotificationsOutlinedIcon />
                  </button>
                </div>
              </div>

              <div className="channel-description">
                
              </div>
            </div>
          </div>
          
          <div className="comment">

          </div>

        </div>
        <div className="recommend-videos">
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
          <ContentCard type="hor" />
        </div>
      </div>

      <style jsx>{`
        .yt-video {
          display: grid;
          grid-template-columns: calc(100% - 406px) 406px;
          grid-column-gap: 12px;
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
          line-height: 24px; dev
          margin-left: 6px;
          font-weight: bold;
          font-size: 0.9rem;
          /* margin-top: 4px; */
        }
        /* .video-contents .video-infos .video-meta .video-actions .action-btn { */
        

        /* channel-info */
        .video-contents .channel-info {
          display: grid;
          padding: 18px 0px;
          grid-template-columns: 48px calc(100% - 60px);
          grid-column-gap: 12px;
        }
        .video-contents .channel-info .profile-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        .video-contents .channel-info .title-wrap {
          display: flex;
          height: 100%;
          justify-content: space-between;
        }
        .video-contents .channel-info .title-wrap > div{
          height: 100%;
        }
        
        .video-contents .channel-info .title-wrap button {
          padding: 10px 24px;
          color: #909090;
          font-size: 0.9rem;
          vertical-align: middle;
          margin-right: 12px;
          margin-right: 4px;
        }
        .video-contents .channel-info .title-wrap button:last-child { margin-right: 0px; }

        .video-contents .channel-info .title-wrap button.channel-sub {
          background-color: #c00;
          color: #fff;
        }
        .video-contents .channel-info .title-wrap button.channel-pay-sub {
          border: 1px solid #3ea6ff;
          color: #3ea6ff;
          margin-right: 12px;
        }
        .video-contents .channel-info .title-wrap button.channel-alert {
          padding: 10px 10px;
        }

        .video-contents .channel-info .title-wrap .channel-sub-count {
          font-size: 0.9rem;
        }

      `}</style>
    </Layout>
  )
}

export default Video