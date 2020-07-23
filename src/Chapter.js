import React from 'react'
import './Chapter.css'

function Chapter({match, language}) {
  return (<>
    Chapter {match.params.id} {language} 
        {/* <Card word="apple" 
          image="https://images5.herokuapp.com/apple.png"
          audio="https://images5.herokuapp.com/apple.m4a"/>
        <Card word="car" 
          image="https://images5.herokuapp.com/car.png"
          audio="https://images5.herokuapp.com/dangao.m4a"/> */}
  </>)
}

export default Chapter