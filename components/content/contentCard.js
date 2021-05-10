import classnames from 'classnames'

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import Link from "next/link"

/**
 * @param {String} type // ver, hor, tiny // default: ver
 * ver: Normal vertical view
 * hor: Normal horizontal view
 * tiny: Video card in global video player, Rendered as tiny size
 */
const ContentCard = ({
  uuid,
  title = 'Youtube Video',
  channel = 'Youtube',
  channelIconSrc,
  runtime = '1:00',
  views = '1M views',
  ago = '1일 전',
  maybeLive,
  type
}) => {
  const isHorizontal = type === 'hor' || type === 'tiny'
  const isTiny = type === 'tiny'

  const thumbnailSrc = `https://i.ytimg.com/vi/${uuid}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKaGeh27vtvjUd5lLc-cHtPNdUog`

  /**
   * Rendering conditions
   */
  const isRenderMenu = isHorizontal && !isTiny
  const renderingConditionViews = !isTiny

  /**
   * Classnames
   */
  const thumbnail_classname = classnames('thumbnail', {
    'horizontal': isHorizontal,
    'tiny': isTiny,
  })
  const video_thumbnail_classname = classnames('video-thumbnail', {
    'tiny': isTiny,
  })

  const content_card_classname = classnames('content-card', {
    'horizontal': isHorizontal
  })

  return (
    <div className={content_card_classname}>

      <div className={thumbnail_classname}>
        <Link href={'/video'}>
          <a><img className={video_thumbnail_classname} src={thumbnailSrc} /></a>
        </Link>
        {isRenderMenu && (
          <ul className="video-menu">
            <li>
              <button className="video-opt-btn">
                <WatchLaterIcon style={{fontSize: 22}} />
              </button>
            </li>
            <li>
              <button className="video-opt-btn">
                <PlaylistPlayIcon />
              </button>
            </li>
          </ul>
        )}
      </div>

      <div className="info">
        <Link href={'/channel'}>
          <a className="video-profile-img"> <img src={channelIconSrc} /> </a> 
        </Link>
        <div className="text">
          <Link href={'/video'}>
            <a className="video-title"> {title} </a>
          </Link> 
          <Link href={'/channel'}>
            <a className="video-channel"> {channel} </a>
          </Link>
          {renderingConditionViews && (
            <p className="video-views"> 조회수 {views} </p>
          )}
        </div>
        <div className="menu">
          
        </div>

      </div>

      <style jsx>{`
        .content-card {
          display: inline-block;
          width: calc(25% - 18px);
          margin: 0px 9px 36px;
          vertical-align: top;
        }
        .content-card.horizontal {
          width: 100%;
          margin: 0px 0px 4px 0px;
        }
        .content-card.horizontal > * {
          display: inline-block;     
        }
        
        .content-card.horizontal .thumbnail {
          position: relative;
          width: 170px;
        }
        .content-card.horizontal .thumbnail.tiny {
          width: 100px;
          height: 56px;
        }

        .content-card .thumbnail .video-thumbnail {
          position: relative;
          width: 100%;
          margin-bottom: 8px;
        }
        .content-card .thumbnail .video-thumbnail.tiny {
          height: 56px;
        }

        .content-card .thumbnail .video-menu {
          position: absolute;
          top: 88px; /* 82px */
          right: 35px; /* 29px */
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .content-card.horizontal .thumbnail .video-menu {
          top: 4px;
          right: 4px;
        }
        .content-card .thumbnail .video-menu li {
          margin-bottom: 6px;
        }
        .content-card .thumbnail .video-menu li:last-child {
          margin-bottom: 0px;
        }
        .content-card .thumbnail .video-menu .video-opt-btn {
          width: 30px;
          height: 30px;
          background-color: black;
          color: #fff;
          border-radius: 4px;
        }
        .content-card.horizontal .thumbnail .video-menu .video-opt-btn svg {
          font-size: 0.4em !important;
        }

        .content-card .thumbnail .video-menu li:last-child .video-opt-btn svg {
          font-size: 1.7rem;
        }
        /* .content-card.horizontal .thumbnail .video-menu .video-opt-btn .MuiSvgIcon-root {
          width: 0.8em;
          height: 0.8em;
        } */

        .content-card.horizontal .info {
          width: calc(100% - 170px);
          vertical-align: top;
        }
        .content-card .info .text {
          display: inline-block;
          width: calc(100% - 48px);
          padding-right: 16px;
        }
        .content-card.horizontal .info .text {
          width: 100%;
          padding: 0px 0px 0px 8px;
        }

        .content-card .info .text .video-title {
          width: 100%;
          font-size: 0.9rem;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .content-card .info .text .video-channel,
        .content-card .info .text .video-views {
          font-size: 0.9rem;
          color: #aaa;          
        }
        .content-card .info .text .video-channel:hover {
          color: #fff;
        }
        .content-card .info .video-profile-img {
          display: inline-block;
          vertical-align: top;
          margin-right: 12px;
        }
        .content-card.horizontal .info .video-profile-img {
          display: none;
        }
        .content-card .info .video-profile-img > img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
        
        `}</style>
    </div>
  )
}

export default ContentCard