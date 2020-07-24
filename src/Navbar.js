import React from 'react'
import './Navbar.css'

function Navbar({language, chapter, updateLanguage, updateChapter}) {

  const chapterText = chapter && chapter>0 ? "Chapter "+chapter : "Chapters"

  return(<>
    <nav className="navbar navbar-light navbar-expand-sm fixed-top _navbar-bg">
    
      <span className="navbar-brand _navbar-brand _pointer" onClick={() => {updateChapter(0)}}>Happy Language</span>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item dropdown"><span className="dropdown-toggle _pointer nav-link" data-toggle="dropdown">Learn {Language(language)}<span className="caret"></span></span>
            <ul className="dropdown-menu">
              <li className="dropdown-item _pointer" onClick={() => {updateLanguage("English")}}>English</li>
              <li className="dropdown-item _pointer" onClick={() => {updateLanguage("French")}}>French</li>
              <li className="dropdown-item _pointer" onClick={() => {updateLanguage("German")}}>German</li>
              <li className="dropdown-item _pointer" onClick={() => {updateLanguage("Chinese")}}>Chinese</li>
              <li className="dropdown-item _pointer" onClick={() => {updateLanguage("Pinyin")}}>Chinese (Pinyin)</li>
            </ul>
          </li>

          <li className="nav-item dropdown"><span className="dropdown-toggle _pointer nav-link" data-toggle="dropdown">{chapterText}<span className="caret"></span></span>
            <ul className="dropdown-menu">
              {[1,2,3].map((i) => 
                <li className="dropdown-item _pointer" key={i} onClick={() => {updateChapter(i)}}>Chapter {i}</li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </>)
}

export default Navbar

function Language(language) {
  if (language === "Pinyin") {
    return "Chinese (Pinyin)"
  }
  return language
}