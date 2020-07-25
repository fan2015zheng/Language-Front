import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import Chapter from './Chapter';
import Home from './Home'

function App() {
 
  const [language, setLanguage] = useState(() => "English")
  const [chapter, setChapter] = useState(() => 0)
  const [page, setPage] = useState(1)

  function updateChapter(chapter) {
    setChapter(chapter)
    setPage(1)
  }

  function updatePage(page) {
    setPage(page)
  }

  function updateLanguage(language) {
    setLanguage(language)
  }
  
  let content
  if (chapter && chapter > 0) {
    content = <Chapter chapter={chapter} page={page} language={language} updatePage={updatePage}/>
  }
  else {
    content = <Home updateChapter={updateChapter}/>
  }
  
  return (
    <>
      <Navbar language={language} chapter={chapter} updateLanguage={updateLanguage} updateChapter={updateChapter}/>
      <div className="_emptySpace"></div>
      { content }
    </>
  );
}

export default App;
