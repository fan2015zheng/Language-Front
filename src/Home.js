import React from 'react'
import './Home.css'
import ChapterCard from './ChapterCard'

function Home({updateChapterLesson}) {
  const description = [
    "Language Basics",
    "Greetings and Introductions",
    "Work and School"
  ]
  return(<>
    <div className="container">
      <div className="row">
        {[1,2,3].map(
          (chapter,index) => 
          <div className="col-md-6 _chapterSpace" key={chapter}>
              <ChapterCard chapter={chapter} 
                description={description[index]} updateChapterLesson={updateChapterLesson}/>
          </div>
        )}
      </div>
    </div>
  </>)
}

export default Home