import ContentCard from './contentCard';
import ContentDivider from './common/contentDivider'
import ExpandButton from './common/special_section/expandButton';
import Header from './common/special_section/header';

const News = ({children}) => {

  return (
    <>
    <ContentDivider />
    <div className="news-content">
      <Header title={"뉴스 속보"} />

      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />

      <ExpandButton />
    </div>

    <style jsx>{`
      .news-content {
        margin-bottom: 36px;
      }

    `}</style>
    </>
  )
}

export default News