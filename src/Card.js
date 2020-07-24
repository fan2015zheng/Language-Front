import React from 'react'
import './Card.css'

function Card({word,image, audio}) {

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "280px 200px"
  }
  
  return (<>
    <div className="_wordCard text-center">
      <div className="_wordImage" style={imageStyle} />

      <div className="_word">
        <div>{word}</div>
      </div>
      <div className="_audioDiv"> 
        <audio controls className="_audio">
        <source src={audio} type="audio/mp4"/>
        Audio not supported
        </audio>
      </div>
    </div>
  </>)
}

export default Card