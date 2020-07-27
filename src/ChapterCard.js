import React from 'react'
import './ChapterCard.css'

function ChapterCard({chapter, description, updateChapterLesson}) {
  const imageStyle = {
    backgroundImage: `url(./img/chapter${chapter}.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  const color = [
    ["info", "light", "primary"],
    ["light", "danger", "dark", "light","danger"],
    ["warning", "light", "info"]
  ]
  
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
        {[0,1,2].map((i)=> 
          <div key={i} className="d-flex _lessonsRow">
            {[0,1,2,3].map((j)=>
              {
                const l = i*4+j+1
                const colorX = (chapter-1)%color.length
                const colory = (l-1)%color[colorX].length
                return (
                <div key={j} className="_lesson">
                  <div className={`_lessonInner badge badge-${color[colorX][colory]}`} onClick={() => {updateChapterLesson(chapter,l)}}>Lesson {l}</div>
                </div>)
              }
            )}
          </div>
        )}
      </div>
    </div>
  </>)
}

export default ChapterCard