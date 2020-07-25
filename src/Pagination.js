import React from 'react'
import './Pagination.css'

function Pagination({count, page, updatePage}) {
  let pages = []
  for(let i=1; i<=count; i++) {
    pages.push(i)
  }
  return(<>
    <div className="_container">
      {pages.map(
        (p) => {
          let currentPageClass =""
          if (p === page){
            currentPageClass="_currentPage"
          }
          return(
          <div key={p} className={`_pageBtn ${currentPageClass}`} onClick={()=>{updatePage(p)}}>{p}</div>
          )
        }
      )}
    </div>
  </>)
}

export default Pagination