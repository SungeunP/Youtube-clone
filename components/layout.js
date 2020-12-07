import styles from '../styles/Layout.module.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import KeyboardSharpIcon from '@material-ui/icons/KeyboardSharp'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HomeIcon from '@material-ui/icons/Home'
import Whatshot from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import YouTubeIcon from '@material-ui/icons/YouTube'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

const Layout = ({ children }) => {
  return (
    <div className="layout">

      <div className="header">

        <div className="left">
          <button className="menu-button">
            <MenuIcon color="white"/>
          </button>
          <img className="ytb-logo" src="/yt_logo_rgb_dark.png" />
        </div>

        <div className="center">
          <div className="search">
            <input className="search-input" placeholder="검색" />
            <button className="keyboard-btn">
              <KeyboardSharpIcon />
            </button>
          </div>
          <button className="search-btn">
            <SearchIcon style={{width: 20, height: 20}} />
          </button>
        </div>

        <div className="right">
          <button className="option-btn">
            <VideoCallIcon/>
          </button>
          <button className="option-btn">
            <AppsIcon/>
          </button>
          <button className="option-btn">
            <NotificationsIcon/>
          </button>
          <img className="profile-img" src="./profile-img.jpg" />
        </div>

      </div>

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

      </div>

      <div className="content">
        {children}
      </div>

      <style jsx>{`
        .layout {
          width: 100vw;
          height: 100vh;
          color: white;
        }

        .header {
          display: flex;
          justify-content: space-between;
          height: 56px;
          background-color: #202020;
          padding: 5px 16px;
        }

        .header * {
          display: flex;
          vertical-align: middle;
          align-items: center;
        }
        .menu-button {
          padding: 8px;
          margin-right: 16px;
        }
        .header button {
          color: white;
        }
        .header .left .ytb-logo {
          width: 97px;
          height: 20px;
        }

        .header .center .search {
          width: 575px;
          height: 30px;
          padding: 0px 4px;
          border: 1px solid #303030;
          background-color: rgb(0, 0, 0);
        }
        .header .center .search > * {
          height: 100%;
        }
        .header .center .search .search-input {
          width: calc(100% - 31px);
          background-color: transparent;
          border: none;
          /* padding: 0px 8px; */
          color: #727272;
          font-size: 1em
        }
        .header .center .search .keyboard-btn {
          width: 31px;
          height: 27px;
          color: #adadad;
          padding: 0px 4px;
          background-color: transparent;
        }
        .header .center .search-btn {
          display: flex;
          justify-content: center;
          width: 65px;
          height: 30px;
          background-color: #313131;
          color: #6f6f6f;
          box-sizing: border-box;
        }
        .header .center .search-btn > svg {
          width: 20px;
        }

        .header .right .profile-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin: 0px 8px;
          cursor: pointer;
        }

        .header .right .option-btn {
          padding: 8px;
          margin-right: 8px;
        }

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
        .sidebar .menu-list li span {
          margin-right: 24px;
        }
        .sidebar .menu-list li p {
          display: inline-block;
          color: white;
          vertical-align: top;
          /* margin-top: 2px; */
        }
        
        .content {
          display: inline-block;
          background-color: #181818;
          width: calc(100% - 240px);
          height: calc(100% - 56px);
          padding: 26px 20px;
        }

      `}</style>
    </div>
  )
}

export default ({ children }) => (
  <Layout>
    {children}
  </Layout>
)