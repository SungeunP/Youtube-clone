import Link from "next/link"

const ContentCard = ({}) => {

  return (
    <div className="content-card">

      <div className="thumbnail">
        <a>
          <img className="video-thumbnail" src="./test_thumbnail.png" />
        </a>
        <div className="video-menu">
          <ul>
            <li>
              <a>
                <button></button>
              </a>
            </li>
            <li>
              <a>
                <button></button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="info">
        <a className="video-profile-img" href="https://google.com">
          <img src="./profile-img.jpg" />
        </a> 
        <div className="text">
          <Link href={'/video'}>
            <a className="video-title"> INTERVIEW | JOSE MOURINHO ON CHELSEA DRAW | Tottenham Tottenham Tottenham Tottenham </a>
          </Link> 
          <p className="video-channel"> Tottenham Hotspur </p>
          <p className="video-views"> 조회수 8.5만회 </p>
        </div>
        <div className="menu">
          
        </div>

      </div>

      <style jsx>{`
        .content-card {
          display: inline-block;
          width: calc(25% - 18px);
          margin: 0px 9px 36px;#
        }
        
        .content-card .thumbnail .video-thumbnail {
          width: 100%;
          margin-bottom: 8px;
        }
        .content-card .thumbnail .video-menu {
          display: none;
        }

        .content-card .info .text {
          display: inline-block;
          width: calc(100% - 48px);
          padding-right: 16px;
        }
        .content-card .info .text p:nth-child(n+2) {
          color: #aaa;
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