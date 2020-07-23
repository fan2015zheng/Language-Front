import React from 'react'
import './ChapterCard.css'

function ChapterCard({chapterId, description}) {
  const imageStyle = {
    backgroundImage: `url(./img/chapter${chapterId}.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  return (<>
    <div className="text-center _chapterCard">
      <div className="_chapterImage" style={imageStyle}>

      </div>
      <div className="_chapter">
        Chapter {chapterId}
      </div>
      <div className="_description">
        {description}
      </div>
    </div>
  </>)
}

export default ChapterCard