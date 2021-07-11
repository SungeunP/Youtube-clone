import Sidebar from './sidebar'
import Header from './header'
import { useRouter } from 'next/router'
import VideoPlayer from './video/VideoPlayer'
import GlobalVideoPlayer from './video/global/GlobalVideoPlayer'

const Layout = ({ children, sidebar, header }) => {
  const showHeader = header === undefined || header === true
  const showSidebar = sidebar === undefined || sidebar === true

  const contentClassnames = `content 
    ${!showSidebar && "no-sidebar"}
  `
  console.log('showSidebar :>> ', showSidebar);
  return (
    <>
    <div className="layout">

      { showHeader && (
        <Header />
      )}
      
      { showSidebar && (
        <Sidebar />
      )}

      <div className={contentClassnames}>
        {children}
      </div>
      
      {showSidebar && (
        <GlobalVideoPlayer />
      )}
      
    </div>
    <style jsx>{`
      .layout {
        width: 100vw;
        height: 100vh;
        color: white;
      }
      
      .content {
        display: inline-block;
        background-color: #181818;
        width: calc(100% - 240px);
        height: calc(100% - 56px);
        padding: 24px;
        overflow-y: auto;
        vertical-align: top;
      }
      .content.no-sidebar {
        width: 100%;
      }
      @media (max-width: 1330px) {
        .content {
          width: calc(100% - 72px);
        }
      }

    `}</style>
    </>
  )
}

// export default ({ children }) => (
//   <Layout>
//     {children}
//   </Layout>
// )

export default Layout