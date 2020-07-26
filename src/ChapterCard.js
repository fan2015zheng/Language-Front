import React from 'react'
import './ChapterCard.css'

function ChapterCard({chapter, description, updateChapterLesson}) {
  const imageStyle = {
    backgroundImage: `url(./img/chapter${chapter}.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  
  return (<>
    <div className="text-center _chapterCard">
      <div className="_chapterImage" style={imageStyle}>

      </div>
      <div className="_chapter">
        Unit {chapter}
      </div>
      <div className="_description">
        {description}
      </div>
      <div className="_lessons">
        <div className="d-flex _lessonsRow">
          <div className="_lesson">
            <div className="_lessonInner badge badge-primary" onClick={() => {updateChapterLesson(chapter,1)}}>Lesson 1</div>
          </div>
          <div className="_lesson">
            <div className="_lessonInner badge badge-success" onClick={() => {updateChapterLesson(chapter,2)}}>Lesson 2</div>
          </div>
        </div>
        <div className="d-flex">
          <div className="_lesson">
            <div className="_lessonInner badge badge-danger" onClick={() => {updateChapterLesson(chapter,3)}}>Lesson 3</div>
          </div>
          <div className="_lesson">
            <div className="_lessonInner badge badge-warning" onClick={() => {updateChapterLesson(chapter,4)}}>Lesson 4</div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default ChapterCard