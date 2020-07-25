import React from 'react'
import './Chapter.css'
import Pagination from './Pagination'
import Page from './Page'

function Chapter({chapter, page, language, updatePage}) {

  const chapterPageCount = [11,11,11]

  let count = 0
  if (chapter && chapter > 0 && chapter <= chapterPageCount.length)
  {
    count = chapterPageCount[chapter - 1]
  }
  
  return(<>
    <Pagination count={count} page={page} updatePage={updatePage}/>
    <Page chapter={chapter} page={page} language={language}/>
  </>)

}

export default Chapter