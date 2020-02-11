import React from "react";
import "../character.css";

function Character(props){

	return(

		<div className="character" style={{backgroundColor: props.color}}>	
			<h3>Name: {props.name}</h3>
			<h3>Superpower: {props.power}</h3>
			<h3>Age: {props.age}</h3>
			<h3>Special Moves:</h3>
			<h3>{props.moves + "\n"}</h3>
		</div>


	)
}


export default Character;
