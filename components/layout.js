import styles from '../styles/Layout.module.css'
// import styles_ from '../styles/Layout.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import KeyboardSharpIcon from '@material-ui/icons/KeyboardSharp'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>

      <div className={styles.header}>

        <div className="left">
          <button className={styles['menu-button']}>
            <MenuIcon color="white"/>
          </button>
          <img src="/yt_logo_rgb_dark.png" />
        </div>

        <div className="center"> 
          <div className="search">
            <input placeholder="검색" />
            <KeyboardSharpIcon />
          </div>
          <button className="search-btn">
            <SearchIcon/>
          </button>
        </div>

        <div className="right">
          <button>
            <VideoCallIcon/>
          </button>
          <button>
            <AppsIcon/>
          </button>
          <button>
            <NotificationsIcon/>
          </button>
        </div>

      </div>

      <div className={styles.sidebar}>
        <p> side-bar </p>
      </div>

      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default ({ children }) => (
  <Layout>
    {children}
    <style jsx>{`
      .header .left button {
        padding: 8px;
        margin-right: 16px;
      }
    `}</style>
  </Layout>
)