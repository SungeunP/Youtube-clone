import { connect } from "react-redux"
import VideoPlayer from "../VideoPlayer"

const GlobalVideoPlayer = (props) => {
  const { globalVideo } = props
  console.log('globalVideo :>> ', globalVideo);
  return (<>
    <div className="global-video-player">
      {globalVideo && (
        <VideoPlayer />
      )}
    </div>

    <style jsx>{`
      .global-video-player {
        position: absolute;
        bottom: 0px;
        right: 20px;
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