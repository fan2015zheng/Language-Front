import React, {useState, useEffect} from 'react'
import './Page.css'
import Card from './Card'

function Page({chapter, lesson, page, language}) {
  const [words, setWords] = useState([])

  const chapterLessonPage = `${chapter}-${lesson}-${page}`

  useEffect(() => {
    fetch(`https://language5.herokuapp.com/words/${chapterLessonPage}`)
    .then(res => res.json())
    .then(data => {
      setWords(data)
    })
  }, [chapterLessonPage])

  return (<>
    <div className="container-fluid">
      <div className="row justify-content-sm-center">
        {
          words.map((w) => {
            let word = ""
            let audio = ""
    
            switch(language) {
              case "English": 
                word = w.English?.spell
                audio = w.English?.audio
                break
              case "French":
                word = w.French?.spell
                audio = w.French?.audio
                break
              case "Chinese":
                word = w.Chinese?.spell
                audio = w.Chinese?.audio
                break
              case "Pinyin":
                word = w.Chinese?.pinyin
                audio = w.Chinese?.audio
                break
              case "German":
                word = w.German?.spell
                audio = w.German?.audio
                break
              default:
                break
            }
            
            return (
              <div key={w._id} className="col-sm-6 col-lg-4 mb-3" align="center">
                <Card word={word} image={w.image} audio={audio}/>
              </div>
            )
          })
        }
      </div>
    </div>
  </>)
}

export default Page