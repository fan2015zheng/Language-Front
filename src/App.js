import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import ChapterLesson from './ChapterLesson';
import Home from './Home'

function App() {
 
  const [language, setLanguage] = useState(() => "English")
  const [chapter, setChapter] = useState(() => 0)
  const [lesson, setLesson] = useState(() => 1)
  const [page, setPage] = useState(1)

  function updateChapterLesson(chapter,lesson) {
    setChapter(chapter)
    setLesson(lesson)
    setPage(1)
  }

  function updateChapter(chapter) {
    setChapter(chapter)
    setLesson(1)
    setPage(1)
  }

  function updateLesson(lesson) {
    setLesson(lesson)
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
    content = <ChapterLesson chapter={chapter} lesson={lesson} page={page} language={language} updatePage={updatePage}/>
  }
  else {
    content = <Home updateChapterLesson={updateChapterLesson}/>
  }
  
  return (
    <>
      <Navbar language={language} chapter={chapter} lesson={lesson} updateLanguage={updateLanguage} updateChapter={updateChapter} updateLesson={updateLesson}/>
      <div className="_emptySpace"></div>
      { content }
    </>
  );
}

export default App;
