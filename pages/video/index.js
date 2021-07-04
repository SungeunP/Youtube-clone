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
import SortIcon from '@material-ui/icons/Sort';

import ContentCard from '../../components/content/contentCard';
import Comment from '../../components/comment'
import VideoPlayer from '../../components/video/VideoPlayer';
import {RecommendedVideos} from 'components/RecommendedVideos/RecommendedVideos';

const Video = () => {
  return (
    <Layout sidebar={false}>
      <Head>
        <title> Video title </title>
      </Head>

      <div className="yt-video">
        <div className="video-contents">
          <VideoPlayer />
          <div className="video-infos">
            <div className="video-tags">
              <VideoHashTag text={'손흥민'} />
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
              <Link href={'/channel'}><a href="/channel">
                <img src="./profile-img.jpg" className="profile-img" />
              </a></Link>
            </div>
            <div id="channel-info-area">
              <div className="title-wrap">
                <div>
                  <Link href={'/channel'}><a href="/channel">
                    <span className="channel-name"> 이스타TV </span>
                  </a></Link>
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
                <p> 2020년 9월 14일 몇 명의 천문학자들이 금성에서 생명체 존재 가능성의 증거를 찾아냈다고 네이처 천문학에 발표했습니다. 이것이 어떤 의미인지 알기 위해 금성의 변화 역사를 들여다봅니다. </p>

                <p> 참고 자료: </p>
                <p> [1] 금성의 관찰과 탐사 (위키피디아) </p>
                <a> https://en.wikipedia.org/wiki/Observa... </a>

                <p> 참고 자료: </p>
                <p> [2] 금성의 표면 온도 (NASA 웹사이트) </p>
                <a> https://solarsystem.nasa.gov/planets/... </a>

                <p> 참고 자료: </p>
                <p> [3] 미생물은 대기 중 높은 곳에서 살아남고, 번성할 수도 있다. </p>
                <a> https://www.sciencemag.org/news/2013/... </a>

                <p> 참고 자료: </p>
                <p> [4] Phosphine gas in the cloud decks of Venus </p>
                <a> https://www.nature.com/articles/s4155... </a>
                <p> Possible Marker of Life Spotted on Venus </p>
                <a> https://www.almaobservatory.org/en/pr... </a>

                <p> 참고 자료: </p>
                <p> [5] 지구에서는 산소가 희박한 장소에 서식하는 박테리아에서 포스핀을 생성 </p>
                <a> https://www.sciencemag.org/news/2020/... </a>

                <p> 참고 자료: </p>
                <p> [6] 금성의 날씨는 어떨까? </p>
                <a> https://phys.org/news/2016-12-weather... </a>

                <p> 참고 자료: </p>
                <p> [7] [과학|기술] 우주인들이 달에 싸놓고 떠난 거, 지금쯤 잘 크고 있을까? </p>
                <a> https://youtu.be/hp70PP9eFk8 </a>

                <p> 참고 자료: </p>
                <p> [8] 금성이 우리 태양계에서 첫 번째로 거주 가능한 세계였을까? </p>
                <a> https://agupubs.onlinelibrary.wiley.c... </a>

                <p> 참고 자료: </p>
                <p> [9] 금성에 있던 물이 어디로? </p>
                <a> https://sci.esa.int/web/venus-express... </a>

                <p> 참고 자료: </p>
                <p> [10] Global resurfacing event </p>
                <a> https://en.wikipedia.org/wiki/Geology... </a>
                
                <p> 참고 자료: </p>
                <p> [11] 금성의 지질학 </p>
                <a> https://en.wikipedia.org/wiki/Geology... </a>
                
                <p> 참고 자료: </p>
                <p> [12] 태양이 지구 온난화를 일으키고 있는가? </p>
                <a> https://climate.nasa.gov/faq/14/is-th... </a>
                
                <p> 참고 자료: </p>
                <p> [13] 화산이 기후변화와 무슨 상관이 있는가? </p>
                <a> https://climate.nasa.gov/faq/42/what-... </a>
                
                <p> 참고 자료: </p>
                <p> [14] 기후변화의 원인 </p>
                <a> https://climate.nasa.gov/causes/ </a>

                <p> 참고 자료: </p>
                <p> [15] 통합시스템으로서의 지구에 관한 연구 </p>
                <a> https://climate.nasa.gov/nasa_science... </a>

                <p> 참고 자료: </p>
                <p> [16] 5천500만년전 대형 화산 폭발때보다 바다 산성화 더 빨리 진행 </p>
                <a> https://www.hankyung.com/society/arti... </a>
                
                <p> 참고 자료: </p>
                <p> [17] 캘리포니아와 오레건, 워싱턴 등 미 서부 10개 주를 휩쓴 산불은 15일까지 모두 460만 에이커(약 1만8600 ㎢)의 면적을 태웠다. </p>
                <a> https://www.chosun.com/international/... </a>

              </div>

            </div>
          </div>
          
          <div className="comment">
            <div className="head">
              <p className="title"> 댓글 <span>260</span>개 </p>
              <div className="align-btn">
                <SortIcon /> <p> 정렬 기준 </p>
              </div>
            </div>
            <div className="my-comment">
              <div id="comment-left-area">
                <img src="./profile-img.jpg" className="profile-img md" />
              </div>
              <div id="comment-right-area">
                <input className="comment-input" value={''} placeholder={"공개 댓글 추가..."} />
              </div>
            </div>
            <div className="other-comments">
              <Comment />
              <Comment />
              <Comment />
            </div>
          </div>

        </div>
        <div className="recommend-videos">
          <RecommendedVideos />
          {/* <ContentCard type="hor" />
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
          <ContentCard type="hor" /> */}
        </div>
      </div>

      <style jsx>{`
        .yt-video {
          display: grid;
          grid-template-columns: calc(100% - 420px) 400px;
          grid-column-gap: 20px;
        }
        
        .video-contents {
          width: 100%;
        }
        .video-contents .video-infos {
          margin-top: 12px;
        }
        .video-contents .video-infos .video-title {
          font-size: 18px;
          font-weight: normal;
        }
        .video-contents .video-infos .video-meta {
          display: flex;
          justify-content: space-between;
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
          vertical-align: top;
          line-height: 24px; dev
          margin-left: 6px;
          font-weight: bold;
          font-size: 0.9rem;
          /* margin-top: 4px; */
        }

        /* channel-info */
        .video-contents .channel-info {
          display: grid;
          padding: 18px 0px;
          grid-template-columns: 48px calc(100% - 60px);
          grid-column-gap: 12px;
          font-size: 0.9em;
        }
        .video-contents .channel-info .profile-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
        .video-contents .channel-info .title-wrap {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .video-contents .channel-info .title-wrap > div {
          height: 48px;
        }
        .video-contents .channel-info .title-wrap > div > * { 
          vertical-align: middle;
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
          font-size: 0.8rem;
        }

        .video-contents .channel-info .channel-description {
          height: 6rem;
          overflow-y: hidden;
        }
        .video-contents .channel-info .channel-description.view-all {
          
        }
        .video-contents .channel-info .channel-description p {
          color: #fff;
        }

        .video-contents > .comment {
          padding: 24px 0px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .video-contents .comment .head .title {
          display: inline-block;
          color: #fff;
          vertical-align: top;
        }
        .video-contents .comment .head .align-btn {
          display: inline-block;
          color: #909090;
          margin-left: 36px;
          font-size: 0.9rem;
          line-height: 0.9rem;
          vertical-align: top;
          cursor: pointer;
        }
        .video-contents .comment .head .align-btn * {
          vertical-align: top;
        }
        .video-contents .comment .head .align-btn p {
          display: inline-block;
          line-height: 20px;
        }
        .video-contents .comment .my-comment {
          display: grid;
          grid-template-columns: 40px calc(100% - 58px);
          grid-gap: 18px;
          margin-top: 32px;
          

        }
        .video-contents .comment .my-comment .comment-input {
          width: 100%;
          height: 36px;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.1); 
          font-size: 1rem;
        }
        
      `}</style>
    </Layout>
  )
}

export default Video