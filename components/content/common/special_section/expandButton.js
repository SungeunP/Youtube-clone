import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpandButton = ({onClick}) => {

  const onClickBtn = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button className="expand-btn" onClick={onClickBtn}>
      <ExpandMoreIcon />
      <style jsx>{`
       .expand-btn {
          width: calc(100% - 18px);
          height: 44px;
          margin: 0px 9px;
          border-bottom: 4px solid #303030;
          color: white;
          font-size: 1.8rem;
        }
       .expand-btn:hover {
          background-color: #303030;
          border-bottom: 4px solid #404040;
        }
      `}</style>
    </button>
  )
}

export default ExpandButton