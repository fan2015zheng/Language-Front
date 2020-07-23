import React from 'react'
import './Card.css'

function Card({word,image, audio, audioType}) {

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "320px 250px"
  }

  return (
    <>
     <div className="_wordCard text-center">
       <div className="_wordImage" style={imageStyle}>
  
       </div>
       <div className="pt-2 pb-2 _word">
         {word}
       </div>
       <div>
        <audio controls>
          <source src={audio} type="audio/mp4"/>
          Audio not supported
        </audio>
       </div>
     </div>
    </>
  )
}

export default Card