import styles from '../styles/Layout.module.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import KeyboardSharpIcon from '@material-ui/icons/KeyboardSharp'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'

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
            <SearchIcon/>
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
        <p> side-bar </p>
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
          padding: 0px 4px;
          background-color: transparent;
        }
        .header .center .search .keyboard-btn > svg {
        }
        

        .header .right .profile-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin: 0px 8px;
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