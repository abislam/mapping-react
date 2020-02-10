import React from 'react';
import './App.css';
import Character from './components/Character.js'
function App() {

  let list = [{
    name:'Cinder', 
    power: 'fire', 
    color: 'orange', 
    age: 28, 
    moves: ["Trailblazer", "Inferno", "Fire Flash"]
  },
  {
    name:'Aganos', 
    power: 'rock', 
    color: '#009999', 
    age: 900000, 
    moves:["Payload Assault", "Pulverize", "Ruin"]
  }, 
  {
    name:'Jago', 
    power: 'Tiger Spirit', 
    color: '#336699', 
    age: 25, 
    moves:["Edokuken", "Tiger Fury", "Wind Kick"]
  }];

  let charStats = list.map((it, idx)=>
    <Character name={it.name} power={it.power} age={it.age} moves={it.moves}/>

  );


  return (
    <div className="App">
      {charStats}
    </div>
  );
}

export default App;
