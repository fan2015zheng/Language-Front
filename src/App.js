import React from 'react';
import './App.css';
import Card from './Card'

function App() {
 
  return (
    <>
      <div>
        <Card word="apple" 
          image="https://images5.herokuapp.com/apple.png"
          audio="https://images5.herokuapp.com/apple.m4a"/>
        <Card word="car" 
          image="https://images5.herokuapp.com/car.png"
          audio="https://images5.herokuapp.com/dangao.m4a"/>
      </div>
    </>
  );
}

export default App;
