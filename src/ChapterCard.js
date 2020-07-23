import React from 'react'
import './ChapterCard.css'

function ChapterCard({chapter, description, updateChapter}) {
  const imageStyle = {
    backgroundImage: `url(./img/chapter${chapter}.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  
  return (<>
    <div className="text-center _chapterCard" onClick={() => {updateChapter(chapter)}}>
      <div className="_chapterImage" style={imageStyle}>

      </div>
      <div className="_chapter">
        Chapter {chapter}
      </div>
      <div className="_description">
        {description}
      </div>
    </div>
  </>)
}

export default ChapterCard