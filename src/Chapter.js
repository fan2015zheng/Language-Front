import React, {useState, useEffect} from 'react'
import './Chapter.css'
import Card from './Card'

function Chapter({match, language}) {

  const [words, setWords] = useState([])
  const [chapterId, setChapterId] = useState(() => 0)
  
  if (chapterId !== match.params.id) {
    //set state triggers re-render, we don't want to render infinitely many times
    setChapterId(match.params.id)
  }
  
  useEffect(() => {
    fetch(`https://language5.herokuapp.com/words/${chapterId-3}`)
    .then(res => res.json())
    .then(data => {
      setWords(data)
    })
  }, [chapterId]) // fetch words only when chapterId changes

  return (<>
    <div className="container-fluid">
      <div className="row justify-content-sm-center">
        {
          words.map((w) => {
            let word = ""
            let audio = ""
      
            switch(language) {
              case "english": 
                word = w.English?.Spell
                audio = w.English?.Audio
                break
              case "french":
                word = w.French?.Spell
                audio = w.French?.Audio
                break
              case "chinese":
                word = w.Chinese?.Spell
                audio = w.Chinese?.Audio
                break
              case "german":
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