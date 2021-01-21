import Link from 'next/link'

const VideoHashTag = ({text}) => {

  return (
    <Link href={'/search'}>
      <span className="video-tag">
        <a> #{text} </a>

        <style jsx>{`
          .video-tag {
            font-size: 0.8rem;
            color: #3ea6ff;
            cursor: pointer;
          }
        `}</style>
      </span>
    </Link>
  )
}

export default VideoHashTag