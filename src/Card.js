import React, {useRef, useEffect} from 'react'
import './Card.css'

function Card({word, image, audio}) {

  const imageStyle = {
    backgroundImage: `url(${image})`,
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
          <source src={audio} type="audio/mp4"/>
          Audio not supported
        </audio>
      </div>
    </div>
  </>)
}

export default Card