import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const VideoPlayer = (props) => {

  return (
    <>
      <div className="yt-video-player">
        <video className="video-viewer">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
    
        <div className="video-controller-wrapper">
          <div className="video-controller">
            <div className="video-progress">
              <div className="progress"></div>
            </div>
            <button className="video-play-pause">
              <PlayArrowIcon style={{color: '#fff'}} />
            </button>
            <button className="video-next"> next </button>
            <button className="video-volume-btn"> next </button>
            <div className="video-time">
              <span className="video-current-point">0:00</span> / <span className="video-end-point">14:00</span>
            </div>
            {false && ( // When video support timeline
              <div className="video-timeline">
                
              </div>
            )}
            <button className="video-small-player"> small </button>
            <button className="video-theater-mode"> theater </button>
            <button className="video-full-screen">  </button>

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
        }
        .yt-video-player .video-controller > div {
          display: inline-block;
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
        .yt-video-player .video-controller button {
          padding: 6px 10px;
        }
      `}</style>
    </>
  )
}

export default VideoPlayer