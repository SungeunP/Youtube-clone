import React from 'react'
import ContentCard from './contentCard'

const FeedRenderer = ({contents}) => {
  
  const renderedContents = ((contents) => {
    console.log('contents :>> ', contents);
    if (!contents) return null
    return contents.map(content => {
      const { id, title, channel, runtime, views, ago, maybeLive } = content
      
      return (
        <ContentCard key={id} {...content}
          uuid={id}
        />
      )
    })    
  })(contents)

  return renderedContents
}

export default FeedRenderer