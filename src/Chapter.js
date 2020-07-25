import React, {useState} from 'react'
import './Chapter.css'
import Pagination from './Pagination'
import Page from './Page'

function Chapter({chapter, language}) {

  const chapterPageCount = [15,14,13]

  let count = 0
  if (chapter && chapter > 0 && chapter <= chapterPageCount.length)
  {
    count = chapterPageCount[chapter - 1]
  }

  const [page, setPage] = useState(() => 1)

  function updatePage(page) {
    setPage(page)
  }
  
  return(<>
    <Pagination count={count} page={page} updatePage={updatePage}/>
    <Page chapter={chapter} page={page} language={language}/>
  </>)

}

export default Chapter