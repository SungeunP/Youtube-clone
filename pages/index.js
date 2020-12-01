import Head from 'next/head'

import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hello world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="contents">

        <div className="card">
          <div className="thumbnail">
            
          </div>
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

          <div className="info">
            <a>
              <img src="" />
            </a>
            <div className="text">
              <h4> INTERVIEW | JOSE MOURINHO ON CHELSEA DRAW | Tottenham Tottenham Tottenham Tottenham </h4>
              <p> Tottenham Hotspur </p>
              <p> 조회수 8.5만회 </p>
            </div>
            <div className="menu">
              
            </div>

          </div>
        </div>

      </div>
    </Layout>
  )
}
