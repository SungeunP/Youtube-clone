import { connect } from "react-redux"
import ContentCard from "../../content/contentCard";
import VideoPlayer from "../VideoPlayer"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from "react";

const GlobalVideoPlayer = (props) => {
  const { globalVideo } = props
  console.log('globalVideo :>> ', globalVideo);
  
  const [ isExpanded, setIsExpanded ] = useState(false)
  
  const expandBtnIcon = isExpanded ? (<ExpandMoreIcon />) : (<ExpandLessIcon />)

  return (<>
    <div className="global-video-player">
      <div className="video-player">
        {globalVideo && (
          <VideoPlayer />
        )}
      </div>
      <div className="current-playing-info">
        <div className="video-info">
          <h1> Video title </h1>
          <p> 목록 • 1 / 1 </p>
        </div>
        <div className="right">
          <button className="open-playlist-btn">
            {expandBtnIcon}
          </button>
        </div>
      </div>
      <div className="current-play-list">
        <ContentCard type="tiny" />
        <ContentCard type="tiny" />
        <ContentCard type="tiny" />
      </div>
    </div>

    <style jsx>{`
      .global-video-player {
        position: absolute;
        width: 400px;
        height: auto;
        background-color: #212121;
        bottom: 0px;
        right: 20px;
        box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.25);
      }

      .global-video-player .current-playing-info {
        display: grid;
        padding: 8px 12px;
        grid-template-columns: calc(100% - 36px) 36px;
        height: 60px;
      }
      .global-video-player .current-playing-info .video-info h1 {
        font-size: 1rem;
        font-weight: normal;
      }
      .global-video-player .current-playing-info .right .open-playlist-btn {
        width: 100%;
        height: 100%;
        color: #bdbdbd;
        font-size: 2rem;
      }
    `}</style>
  </>)
}

const mapStateToProps = state => {
  console.log('state :>> ', state);
  return {
    globalVideo: state.globalVideoPlayer.globalVideo
  }
}

export default connect(mapStateToProps, {})(GlobalVideoPlayer)