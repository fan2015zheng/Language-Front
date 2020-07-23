import React, {useState, useEffect} from 'react'
import './Chapter.css'
import Card from './Card'

function Chapter({chapter, language}) {

  const [words, setWords] = useState([])
  
  useEffect(() => {
    fetch(`https://language5.herokuapp.com/words/${chapter-3}`)
    .then(res => res.json())
    .then(data => {
      setWords(data)
    })
  }, [chapter])

  return (<>
    <div className="container-fluid">
      <div className="row justify-content-sm-center">
        {
          words.map((w) => {
            let word = ""
            let audio = ""
      
            switch(language) {
              case "English": 
                word = w.English?.Spell
                audio = w.English?.Audio
                break
              case "French":
                word = w.French?.Spell
                audio = w.French?.Audio
                break
              case "Chinese":
                word = w.Chinese?.Spell
                audio = w.Chinese?.Audio
                break
              case "German":
                word = w.German?.Spell
                audio = w.German?.Audio
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

export default Chapter