import classnames from 'classnames'

import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

import Link from "next/link"

/**
 * @param {String} type // ver, hor // default: ver
 */
const ContentCard = ({type}) => {
  
  const isHorizontal = type === 'hor'

  const thumbnail_classname = classnames('thumbnail', {
    'horizontal': isHorizontal
  })

  const content_card_classname = classnames('content-card', {
    'horizontal': isHorizontal

  })

  return (
    <div className={content_card_classname}>

      <div className={thumbnail_classname}>
        <Link href={'/video'}>
          <a><img className="video-thumbnail" src="./test_thumbnail.png" /></a>
        </Link>
        <ul className="video-menu">
          <li>
            <button className="video-opt-btn">
              <WatchLaterIcon />
            </button>
          </li>
          <li>
            <button className="video-opt-btn">
              <PlaylistPlayIcon />
            </button>
          </li>
        </ul>
      </div>

      <div className="info">
        <Link href={'/channel'}>
          <a className="video-profile-img"> <img src="./profile-img.jpg" /> </a> 
        </Link>
        <div className="text">
          <Link href={'/video'}>
            <a className="video-title"> INTERVIEW | JOSE MOURINHO ON CHELSEA DRAW | Tottenham Tottenham Tottenham Tottenham </a>
          </Link> 
          <Link href={'/channel'}>
            <a className="video-channel"> Tottenham Hotspur </a>
          </Link>
          <p className="video-views"> 조회수 8.5만회 </p>
        </div>
        <div className="menu">
          
        </div>

      </div>

      <style jsx>{`
        .content-card {
          display: inline-block;
          width: calc(25% - 18px);
          margin: 0px 9px 36px;
        }
        .content-card.horizontal {
          width: 100%;
        }
        
        .content-card .thumbnail .video-thumbnail {
          position: relative;
          width: 100%;
          margin-bottom: 8px;
        }
        .content-card .thumbnail .video-menu {
          position: absolute;
          top: 88px; /* 82px */
          right: 35px; /* 29px */
          list-style: none;
          margin: 0;
          padding: 0;
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
        .content-card .thumbnail .video-menu li:last-child .video-opt-btn svg {
          font-size: 1.7rem;
        }

        .content-card .info .text {
          display: inline-block;
          width: calc(100% - 48px);
          padding-right: 16px;
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