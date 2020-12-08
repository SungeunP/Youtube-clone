import HomeIcon from '@material-ui/icons/Home'
import Whatshot from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import YouTubeIcon from '@material-ui/icons/YouTube'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import HelpIcon from '@material-ui/icons/Help';
import FlagIcon from '@material-ui/icons/Flag';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
  
  

  return (
    <div className="sidebar">

      <ul className="menu-list">
        <li className="menu">
          <span>
            <HomeIcon />
          </span>
          <p> 홈 </p> 
        </li>
        <li className="menu">
          <span>
            <Whatshot />
          </span>
          <p> 인기 </p>
        </li>
        <li className="menu">
          <span>
            <SubscriptionsIcon />
          </span>
          <p> 구독 </p> 
        </li>
        <li className="menu">
          <span>
            <YouTubeIcon />
          </span>
          <p> Originals </p>
        </li>
      </ul>

      <ul className="menu-list">
        <li className="menu">
          <span>
            <VideoLibraryIcon />
          </span>
          <p> 보관함 </p> 
        </li>
        <li className="menu">
          <span>
            <HistoryIcon />
          </span>
          <p> 시청 기록 </p>
        </li>
        <li className="menu">
          <span>
            <SubscriptionsIcon />
          </span>
          <p> 내 동영상 </p> 
        </li>
        <li className="menu">
          <span>
            <YouTubeIcon />
          </span>
          <p> 구매 내역 </p>
        </li>
        <li className="menu">
          <span>
            <YouTubeIcon />
          </span>
          <p> 나중에 볼 동영상 </p>
        </li>
        <li className="menu">
          <span>
            <YouTubeIcon />
          </span>
          <p> 더보기 </p>
        </li>
      </ul>

      <p className="menu-title"> 구독 </p>
      <ul className="menu-list">
        <li className="menu">
          <span>
            <img src="./profile-img.jpg" className="channel-img-sm" />
          </span>
          <p> 박성은 TV </p>
        </li>
        <li className="menu">
          <span>
            <img src="./profile-img.jpg" className="channel-img-sm" />
          </span>
          <p> Samsung </p>
        </li>
        <li className="menu">
          <span>
            <img src="./profile-img.jpg" className="channel-img-sm" />
          </span>
          <p> Apple </p>
        </li>
        <li className="menu">
          <span>
            <img src="./profile-img.jpg" className="channel-img-sm" />
          </span>
          <p> essential; </p>
        </li>
        <li className="menu">
          <span>
            <img src="./profile-img.jpg" className="channel-img-sm" />
          </span>
          <p> 사피엔스 스튜디오 </p>
        </li>
        <li className="menu">
          <span>
            <img src="./profile-img.jpg" className="channel-img-sm" />
          </span>
          <p> UNDERkg </p>
        </li>
        <li className="menu">
          <span>
            <img src="./profile-img.jpg" className="channel-img-sm" />
          </span>
          <p> 김진짜 Real KIM </p>
        </li>
        <li className="menu">
          <span>
            <ExpandMoreIcon />
          </span>
          <p> 978개 더보기 </p>
        </li>
      </ul>

      <p className="menu-title"> YOUTUBE 더보기 </p>
      <ul className="menu-list">
        <li className="menu">
          <span>
            <TheatersIcon />
          </span>
          <p> 영화 </p>
        </li>
        <li className="menu">
          <span>
            <SportsEsportsIcon />
          </span>
          <p> 게임 </p>
        </li>
        <li className="menu">
          <span>
            <LiveTvIcon />
          </span>
          <p> 실시간 </p>
        </li>
        <li className="menu">
          <span>
            <EmojiObjectsIcon />
          </span>
          <p> 학습 </p>
        </li>
      </ul>

      <ul className="menu-list">
        <li className="menu">
          <span>
            <SettingsIcon />
          </span>
          <p> 설정 </p>
        </li>
        <li className="menu">
          <span>
            <FlagIcon />
          </span>
          <p> 신고 기록 </p>
        </li>
        <li className="menu">
          <span>
            <HelpIcon />
          </span>
          <p> 고객센터 </p>
        </li>
        <li className="menu">
          <span>
            <AnnouncementIcon />
          </span>
          <p> 의견 보내기 </p>
        </li>
      </ul>

      <style jsx>{`
        .sidebar,
        .content {
          vertical-align: top;
        }

        .sidebar {
          display: inline-block;
          width: 240px;
          height: calc(100% - 56px);
          background-color: #212121;
        }

        .sidebar .menu-title {
          color: grey;
          font-size: 0.9em;
          margin: 0px 24px;
        }
        .sidebar .menu-list {
          list-style-type: none;
          padding-left: 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #383838;
        }
        .sidebar .menu-list li {
          padding: 6px 24px;
          color: #909090;
          cursor: pointer;
        }
        .sidebar .menu-list li:hover {
          background-color: #383838;
        }
        .sidebar .menu-list li img.channel-img-sm {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        .sidebar .menu-list li span {
          margin-right: 24px;
        }
        .sidebar .menu-list li p {
          display: inline-block;
          color: white;
          vertical-align: top;
          /* margin-top: 2px; */
        }
      `}</style>
    </div>
  )
}

export default Sidebar