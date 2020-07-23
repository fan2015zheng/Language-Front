import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import Chapter from './Chapter';
import Home from './Home'

function App() {
 
  const [language, setLanguage] = useState(() => "English")
  const [chapter, setChapter] = useState(() => 0)
  
  function updateLanguage(language) {
    setLanguage(language)
  }

  function updateChapter(chapter) {
    setChapter(chapter)
  }
  
  let content
  if (chapter && chapter > 0) {
    content = <Chapter chapter={chapter} language={language}/>
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
