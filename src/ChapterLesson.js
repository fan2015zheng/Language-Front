import React from 'react'
import './ChapterLesson.css'
import Pagination from './Pagination'
import Page from './Page'
import Util from './Util'

function ChapterLesson({chapter, lesson, page, language, updatePage}) {

  return(<>
    <Pagination count={Util.getPageCount(language,chapter,lesson)} page={page} updatePage={updatePage}/>
    <Page chapter={chapter} lesson={lesson} page={page} language={language}/>
  </>)

}

export default ChapterLesson