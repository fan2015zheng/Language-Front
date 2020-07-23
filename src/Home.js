import React from 'react'
import './Home.css'
import ChapterCard from './ChapterCard'
import { Link } from 'react-router-dom'

function Home() {
  const description = [
    "One is fine",
    "Two is really really the smallest prime number you will ever seen",
    "Three is okay and it represents success."
  ]
  return(<>
    <div className="container">
      <div className="row">
        {[1,2,3].map(
          (chapterId,index) => 
          <div className="col-sm-6 col-md-4 _chapterCard" key={chapterId}>
            <Link to={`/chapter/${chapterId}`}>
              <ChapterCard chapterId={chapterId}
                description={description[index]}/>
            </Link>
          </div>
        )}
      </div>
    </div>
  </>)
}

export default Home