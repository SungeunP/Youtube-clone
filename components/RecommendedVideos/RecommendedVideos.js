import { useEffect, useState } from "react";
import ContentCard from 'components/content/contentCard';

/**
 * RecommendedVideos component
 */
export const RecommendedVideos = (props) => {
  
  // Recommended videos
  const [recommendedVideos, setRecommendedVideos] = useState(undefined)
  
  // API requested flag
  const [apiRequestedFlag, setApiRequestedFlag] = useState(false)

  /**
   * Fetching recommended videos
   */
  useEffect(() => {
    if (!apiRequestedFlag) {
      fetch('/api/get/recommended')
      .then( response => response.json() )
      .then( response => {
        const { videos } = response
        setRecommendedVideos(videos)
      })
    }
    
    setApiRequestedFlag(true) // Flag turn to on
  }, []);

  return (
    <div className="recommended-videos">
      {recommendedVideos && recommendedVideos.map( recommendedVideo => (
        <ContentCard type={'hor'} {...recommendedVideo}
          uuid={recommendedVideo.id}
        />
      ))}
    </div>
  )
}