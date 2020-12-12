import CloseIcon from '@material-ui/icons/Close';

const Header = ({title, onClose}) => {

  return (
    <div className="head">
      <p className="title">
        {title}
      </p>
      <button className="close-btn">
        <CloseIcon />
      </button>
      <style jsx>{`
        .head {
          display: flex;
          margin: 32px 12px;
          justify-content: space-between;
        }
        .title {
          font-size: 1.25rem;
        }
        .close-btn {
          width: 24px;
          height: 24px;
          color: grey;
          fill: grey;
          vertical-align: middle;
        }
      `}</style>
    </div>
  )
}

export default Header