import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Crop169SharpIcon from '@material-ui/icons/Crop169Sharp';
import FullscreenSharpIcon from '@material-ui/icons/FullscreenSharp';
import { connect } from 'react-redux';
import setGlobalVideo from '../../redux/actions/setGlobalVideoAction'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import PauseIcon from '@material-ui/icons/Pause';
import classNames from 'classnames';

const iconStyle = {color: '#fff'}

const VideoPlayer = (props) => {
  const {
    volume
  } = props

  // Controller
  const videoPlayerRef = useRef()
  const [ isVideoPlaying, setIsVideoPlaying ] = useState(false) // Video state
  const [ videoVolume, setVideoVolume ] = useState(volume ? volume : 25) // Video state

  // UI states
  const [ isVolumeHover, setIsVolumeHover ] = useState(false)

  // useEffect(() => {
  //   console.log('videoPlayerRef.current :>>', videoPlayerRef.current)
  // }, [videoPlayerRef])
  
  /**
   * Controll state
   */
  // Toggle video play/pause
  const toggleVideoPlayPause = () => {
    // Toggle play/pause state
    if (!isVideoPlaying) {
      videoPlayerRef.current.play()
    } else {
      videoPlayerRef.current.pause()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }
  // Control video volume
  const controlVideoVolume = (value) => {
    value = value / 100
    videoPlayerRef.current.volume = value
  }

  /**
   * Video events
   */
  // On video played
  const onVideoPlay = (e) => {
    setIsVideoPlaying(true)
  }
  // On video ended
  const onVideoEnded = (e) => {
    setIsVideoPlaying(false)
  }

  /**
   * [UI] Video
   */
  const onClickVideo = (e) => {
    toggleVideoPlayPause()
  }
  /**
   * [UI] VideoController
   */
  // Play/Pause button clicked
  const onClickVideoPlayBtn = (e) => {
    toggleVideoPlayPause()
  }
  // Volume controller hovered
  const onHoverVideoVolumeBtn = (e) => {
    setIsVolumeHover(true)
  }
  // Volume controller mouse leaved
  const onLeaveVideoVolumeBtn = (e) => {
    setIsVolumeHover(false)
  }
  // Sound slider value changed
  const onChangeVideoSound = (e) => {
    const { value } = e.target
    setVideoVolume(value)
    controlVideoVolume(value)
  }
  // Play/Pause button clicked
  const onClickSmallPlayerBtn = (e) => {
    props.setGlobalVideo(true)
  }


  // Volume controller classnames
  const volumeControllerClassnames = classNames('video-volume-controller', {
    'hovered': isVolumeHover
  })

  return (
    <>
      <div className="yt-video-player">
        <video className="video-viewer" ref={videoPlayerRef} volume={videoVolume} autoPlay={true}
          onClick={onClickVideo} 
          onPlay={onVideoPlay}
          onEnded={onVideoEnded}>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
    
        <div className="video-controller-wrapper">
          <div className="video-controller">
            <div className="video-progress">
              <div className="progress"></div>
            </div>
            <div className="controller-grid">
              <div id="start">
                <button className="video-play-pause" onClick={onClickVideoPlayBtn}>{
                  isVideoPlaying ? (
                    <PauseIcon style={iconStyle} />
                  ) : (
                    <PlayArrowIcon style={iconStyle} />
                  )
                }</button>
                <button className="video-next">
                  <SkipNextIcon style={iconStyle} />
                </button>
                <div className={volumeControllerClassnames} onMouseEnter={onHoverVideoVolumeBtn} onMouseLeave={onLeaveVideoVolumeBtn}>
                  <button className="video-volume-btn">
                    <VolumeUpIcon style={iconStyle} />
                  </button>
                  <div className="video-volume-slider">
                    <input type="range" value={videoVolume} min="0" max="100" onChange={onChangeVideoSound} />
                  </div>
                </div>
                <div className="video-time">
                  <span className="video-current-point">0:00</span> / <span className="video-end-point">14:00</span>
                </div>
                <div className="video-timeline">

                </div>
              </div>
              <div id="end">
                <Link href={"/"}>
                  <button className="video-small-player" onClick={onClickSmallPlayerBtn}>
                    소형 플레이어
                  </button>
                </Link>
                <button className="video-theater-mode">
                  <Crop169SharpIcon style={iconStyle} />
                </button>
                <button className="video-full-screen">
                  <FullscreenSharpIcon style={iconStyle} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <style jsx>{`
        .yt-video-player {
          position: relative;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.25);
        }
        .yt-video-player > video {
          display: block;
          width: 100%
        }
        .yt-video-player .video-controller-wrapper {
          position: relative;
        }
        .yt-video-player .video-controller {
          position: absolute;
          width: 100%;
          height: 44px;
          background-color: rgba(0, 0, 0, 0.25);
          padding: 0px 1%;
          line-height: 40px;
          top: -44px;
          overflow: hidden;
        }
        .yt-video-player .video-controller .controller-grid {
          display: grid;
          height: calc(100% - 4px);
          grid-template-columns: auto 194px;
        }
        .yt-video-player .video-controller .controller-grid > div > * {
          display: inline-block;
          vertical-align: top;
        }
        /* .yt-video-player .video-controller button svg {
          color: #fff !important;
          fill: #fff !important;
        }
        .yt-video-player .video-controller button svg path { 
          fill: #fff !important;
        }
        .yt-video-player .video-controller button svg text {
          fill: #fff !important;
        } */
        .yt-video-player .video-controller .video-progress {
          display: block !important;
          width: 100%;
          height: 4px;
          margin-left: auto;
          margin-right: auto;
          background-color: rgba(40, 40, 40, 0.15);
        }
        .yt-video-player .video-controller .video-progress .progress {
          width: 30px;
          height: 100%;
          background-color: #cc0000;
        }
        .yt-video-player .video-controller .video-volume-controller {
          position: relative;
          width: 44px;
          height: 40px;
          transition: width 0.6s;
        }
        .yt-video-player .video-controller .video-volume-controller.hovered {
          width: 128px;
        }
        .yt-video-player .video-controller .video-volume-controller .video-volume-slider {
          position: absolute;
          top: 0px;
          left: 44px;
          width: 0px;
          opacity: 0;
          margin-left: 4px;
          transition: width 0.6s, opacity 0.4s;
        }
        .yt-video-player .video-controller .video-volume-controller.hovered .video-volume-slider {
          width: 80px;
          opacity: 1;
        }
        .yt-video-player .video-controller .video-volume-controller .video-volume-slider input {
          width: 0px;
          line-height: 40px;
          margin: 0;
          transition: width 0.6s;
        }
        .yt-video-player .video-controller .video-volume-controller.hovered .video-volume-slider input {
          width: 80px;
        }
        .yt-video-player .video-controller .video-time {
          font-size: 0.8rem;
          padding-left: 4px;
        }
        .yt-video-player .video-controller button {
          padding: 8px 10px 5px;
          transition: background-color 0.2s;
          color: #fff;
        }
        .yt-video-player .video-controller button:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
        .yt-video-player .video-controller .video-timeline {
          width: 30%;
        }
        .yt-video-player .video-controller button.video-small-player {
          height: 100%;
        }
      `}</style>
    </>
  )
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, {setGlobalVideo})(VideoPlayer)