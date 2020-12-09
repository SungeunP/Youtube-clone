const ContentCard = ({}) => {

  return (
    <div className="content-card">

      <div className="thumbnail">
        
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

        {/* <a>
          <img className="video-thumbnail" src="./test_thumbnail.png" />
        </a>
        <div className="text">
          <h4> INTERVIEW | JOSE MOURINHO ON CHELSEA DRAW | Tottenham Tottenham Tottenham Tottenham </h4>
          <p> Tottenham Hotspur </p>
          <p> 조회수 8.5만회 </p>
        </div>
        <div className="menu">
          
        </div> */}

      </div>

      <style jsx>{`
        .content-card {
          display: inline-block;
          width: calc(25% - 18px);
          background-color: yellow;
          margin-right: 18px;
        }
        .content-card:nth-child(4n) {
          width: calc(25%);
          margin-right: 0px;
        }
        `}</style>
    </div>
  )
}

export default ContentCard