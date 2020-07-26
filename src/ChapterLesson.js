import React from 'react'
import './ChapterLesson.css'
import Pagination from './Pagination'
import Page from './Page'

function ChapterLesson({chapter, lesson, page, language, updatePage}) {

  const chapterLessonPageCount =[
    [11,15,15]
  ]


  let count = 0
  if (chapter && 
      chapter > 0 && 
      chapter <= chapterLessonPageCount.length)
  {
    const lessonPageCount = chapterLessonPageCount[chapter - 1]
    if (lesson && 
        lesson > 0 &&
        lesson <= lessonPageCount.length)
    {
      count = lessonPageCount[lesson - 1]
    }
  }
  
  return(<>
    <Pagination count={count} page={page} updatePage={updatePage}/>
    <Page chapter={chapter} lesson={lesson} page={page} language={language}/>
  </>)

}

export default ChapterLesson