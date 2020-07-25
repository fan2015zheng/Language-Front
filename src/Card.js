import React, {useRef, useEffect} from 'react'
import './Card.css'

function Card({word, image, audio}) {

  const imageUrl = image ? `https://images5.herokuapp.com/${image}` : ""
  const audioUrl = audio ? `https://images5.herokuapp.com/${audio}` : ""

  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "280px 210px"  //4:3
  }
  
  const audioR = useRef()

  useEffect(() => {
    audioR.current.load()
  })

  return (<>
    <div className="_wordCard text-center">
      <div className="_wordImage" style={imageStyle} />

      <div className="_word">
        <div>{word}</div>
      </div>
      <div className="_audioDiv"> 
        <audio ref={audioR} controls className="_audio">
          <source src={audioUrl} type="audio/mp4"/>
          Audio not supported
        </audio>
      </div>
    </div>
  </>)
}

export default Card