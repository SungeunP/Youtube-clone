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
        <div className="text">
          <p className="video-title"> INTERVIEW | JOSE MOURINHO ON CHELSEA DRAW | Tottenham Tottenham Tottenham Tottenham </p>
          <p> Tottenham Hotspur </p>
          <p> 조회수 8.5만회 </p>
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
        }
        .content-card .thumbnail .video-menu {
          display: none;
        }

        .content-card .info .text .video-title {
          width: 100%;
          font-size: 0.9em;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .content-card .info .text p:nth-child(n+2) {
          color: #aaa;
        }
        
        `}</style>
    </div>
  )
}

export default ContentCard