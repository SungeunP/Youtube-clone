import { connect } from "react-redux"
import ContentCard from "../../content/contentCard";
import VideoPlayer from "../VideoPlayer"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect, useState } from "react";
import classNames from "classnames";

const GlobalVideoPlayer = (props) => {
  const { globalVideo } = props

  const [ isExpanded, setIsExpanded ] = useState(false)
  const [ exVideoDatas, setExVideoDatas ] = useState(null)

  useEffect(() => {
    console.log('Global video player mounted')
    if (!exVideoDatas) {
      fetch('/api/get/recommended?max=3')
      .then(response => response.json())
      .then(response => {
        const { videos } = response
        setExVideoDatas(videos)
      })
    }
  }, [])

  const onClickExpandButton = (e) => {
    setIsExpanded(!isExpanded)
  }

  /**
   * Rendering conditions
   */
  const renderingExpanded = isExpanded // Rendering expanded UI
  const renderingStashedVideos = exVideoDatas ? true : false
  console.log('renderingStashedVideos :>> ', renderingStashedVideos);
  console.log('exVideoDatas :>> ', exVideoDatas);
  
  /**
   * Rendering
   */
  const expandBtnIcon = isExpanded ? (<ExpandMoreIcon />) : (<ExpandLessIcon />)

  /**
   * Classnames
   */
  const globalVideoPlayerClassname = classNames('global-video-player', {
    'expanded': isExpanded
  })

  return (<>
    <div className={globalVideoPlayerClassname}>
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
          <button className="open-playlist-btn" onClick={onClickExpandButton}>
            {expandBtnIcon}
          </button>
        </div>
      </div>
      {renderingExpanded && (
        <div className="current-play-list">
          {renderingStashedVideos && (<>
            <ContentCard type='tiny' />
            <ContentCard type='tiny' />
            <ContentCard type='tiny' />
          </>)}
        </div>
      )}
    </div>

    <style jsx>{`
      .global-video-player {
        position: absolute;
        width: 400px;
        height: 280px;
        bottom: 0px;
        background-color: #212121;
        right: 20px;
        box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.25);
      }
      .global-video-player.expanded {
        height: auto;
      }

      .global-video-player .current-playing-info {
        display: grid;
        padding: 10px 12px;
        grid-template-columns: calc(100% - 36px) 36px;
      }
      .global-video-player .current-playing-info .video-info h1 {
        font-size: 1rem;
        font-weight: normal;
      }
      .global-video-player .current-playing-info .video-info p {
        font-size: 0.8rem;
        margin-top: 4px;
      }
      .global-video-player .current-playing-info .right .open-playlist-btn {
        width: 100%;
        height: 100%;
        color: #bdbdbd;
        font-size: 2rem;
      }
      .global-video-player .current-play-list {
        height: 
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