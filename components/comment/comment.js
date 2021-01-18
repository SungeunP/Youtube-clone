import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Comment = () => {

  return (
    <div className="comment">
      <div className="left-area">
        <img src="./profile-img.jpg" className="profile-img md"/>
      </div>
      <div className="right-area">
        <div className="comment-info">
          <p className="user-name"> 박성은 </p>
          <p className="ago"> 53분 전 (수정됨) </p>
        </div>
        <p className="comment-text"> What a world-class developer </p>
        <div className="comment-ctl">
          <button className="action-btn thumb-up-btn">
            <ThumbUpIcon size={14} />
            <span className="thumb-up-count"> 113 </span>
          </button>
          <button className="action-btn thumb-down-btn">
            <ThumbDownIcon />
          </button>
          <button className="action-btn reply">
            답글
          </button>
        </div>
      </div>
      <style jsx>{`
        .comment {
          display: grid;
          margin-top: 28px;
          grid-template-columns: 40px calc(100% - 58px);
          grid-gap: 18px;
        }
        .comment .comment-info p {
          display: inline-block;
          font-size: 0.9rem;
        }
        .comment .comment-info p:first-child,
        .comment .comment-text {
          color: white;
        }
        
        .comment .comment-info .ago {
          margin-left: 4px;
        }

        .comment .comment-ctl {
          margin-top: 8px;
        }
        .comment .comment-ctl .action-btn {
          margin-right: 12px;
          vertical-align: top;
          padding: 6px 12px;
        }
        .comment .comment-ctl .action-btn svg.MuiSvgIcon-root {
          font-size: 1.0rem;
        }
        .comment .comment-ctl .action-btn.thumb-up-btn,
        .comment .comment-ctl .action-btn.thumb-down-btn {
          padding: 0px;
        }
        .comment .comment-ctl .action-btn .thumb-up-count,
        .comment .comment-ctl .action-btn .thumb-down-count {
          line-height: 28px;
          vertical-align: top;
        }
        `}</style>
    </div>
  )
}

export default Comment