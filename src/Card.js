import React, {useRef} from 'react'
import './Card.css'



function Card({word,image, audio, audioType}) {

  const audioR = useRef()

  function sound() {
    audioR.current.play()
  }

  return (
    <>
     <div className="_card p-1 m-1">
       <div className="text-center">
        <img alt={word} src={image} width="100px"></img>
       </div>
       <div className="text-center m-2">
         {word}
       </div>
       <div className="text-center">
         <button onClick={sound} className="btn btn-outline-info btn-sm">Sound</button>
       </div>
       <audio ref={audioR} controls className="_audio">
          <source src={audio} type="audio/mp4"/>
          Audio not supported
        </audio>
     </div>
    </>
  )
}

export default Card