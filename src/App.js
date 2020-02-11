import React from 'react';
import './App.css';
import Character from './components/Character.js'
function App() {

  let list = [
    {
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
    }
  ];

  let myList = [
    {
      name: 'Goku',
      power: 'Super Saiyan Blue',
      color: 'blue',
      age: 36,
      moves: ["Spirit Bomb", "Kaioken", "Kamehameha"]
    },
    {
      name: 'Gohan',
      power: 'Ultimate Gohan',
      color: 'Purple',
      age: 26,
      moves: ["Father Son Kamehameha", "Masenko", "Kamehameha"]
    },
    {
      name: 'Krillin',
      power: 'Bald Head',
      color: 'Red',
      age: 34,
      moves: ["Destructo Disc", "Solar Flare", "Kamehameha"]
    }
  ];


  let charStats = list.map((it, idx)=>
    <Character name={it.name} power={it.power} age={it.age} moves={it.moves} color={it.color} key={idx}/>
  );

  let myCharStats = myList.map((x, idx)=>
    <Character name={x.name} power={x.power} age={x.age} moves={x.moves} color={x.color} key={idx}/>
  )

  return (
    <div className="App">
      {charStats}
      {myCharStats}
    </div>
  );
}

export default App;
