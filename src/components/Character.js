import React from "react";

function Character(props){



	return(
		<div>
			<h3>Name: {props.name}</h3>
			<h3>Superpower: {props.power}</h3>
			<h3>Age: {props.age}</h3>
			<h3>Special Movies:</h3>
			<h3>{props.moves + "\n"}</h3>
		</div>

	)
}


export default Character;
