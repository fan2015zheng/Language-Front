import React, {useState, useEffect} from 'react'
import './Page.css'
import Card from './Card'
import Util from './Util'
import {BarLoader} from 'react-spinners'

function Page({chapter, lesson, page, language}) {
  const [words, setWords] = useState([])
  const [loading, setLoading] = useState(false)

  const dbPage = Util.getDatabasePage(language, chapter, lesson, page)
  const chapterLessonPage = `${chapter}-${lesson}-${dbPage}`

  useEffect(() => {
    setLoading(true)
    fetch(`https://language5.herokuapp.com/words/${chapterLessonPage}`)
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setWords(data)
    })
  }, [chapterLessonPage])

  return (<>
    <div className="container-fluid">
      <div className="row justify-content-sm-center">
        <div className="col-md-10 col-lg-8 col-xl-6">
          <div className="row">
            <div className="_loader">
              <BarLoader loading={loading} color="#563d7c" />
            </div>
           
            {
              words.map((w) => {

                let word = getWord(w, language)
                let image = getImage(w)
                let audio = getAudio(w, language)
              
                return (
                  <div key={w._id} className="col-md-6 mb-3" align="center">
                    <Card word={word} image={image} audio={audio}/>
                  </div>
                )
              })
            }  
          </div>    
        </div>
      </div>
    </div>
  </>)
}

export default Page

function hasAudio(w, language) {
  const text = getRawText(w, language)
  return text && text.charAt(0) !== '#'
}

function hasImage(w) {
  return w.key && w.key.charAt(0) !== '#'
}

function getRawText(w, language) {
  if (language === "English") return w.English ?? ""
  if (language === "Chinese") return w.Chinese ?? ""
  if (language === "Pinyin") return w.Pinyin ?? ""
  if (language === "French") return w.French ?? ""
  if (language === "German") return w.German ?? ""
  return ""
}

function getWord(w, language) {
  let word = getRawText(w, language)
  if (word.charAt(0) === '#') {
    word = word.substring(1)
  }
  return word
}

function getKey(w) {
  let key = w.key ?? ""
  if (key.charAt(0) === '#') {
    key = key.substring(1)
  }
  return key
}

function getImage(w) {
  if (hasImage(w)) {
    return getKey(w)+".png"
  }
  return ""
}

function getAudio(w, language) {
  if (hasAudio(w, language)) {
    return getKey(w)+getAudioLetter(language)+".m4a"
  }
  return ""
}

function getAudioLetter(language) {
  if (language === "Chinese") return "C"
  if (language === "Pinyin") return "C"
  if (language === "French") return "F"
  if (language === "German") return "G"
  return "" 
}