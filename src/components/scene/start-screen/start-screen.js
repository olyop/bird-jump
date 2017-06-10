// Import React
import React from 'react'

// Import CSS
import './start-screen.css'

const StartScreen = props => {
	return (
		<div className="start-screen">

			<h1>{props.database.gameTitle}</h1>
			
			<div className="difficulty-counter">
				
				<i className="material-icons" onClick={props.makeDifficultyEasier}>keyboard_arrow_left</i>
				
				<span>{props.database.difficultyLevelNames[props.gameState.difficultyLevel]}</span>
				
				<i className="material-icons" onClick={props.makeDifficultyHarder}>keyboard_arrow_right</i>
				
			</div>
			
			<button onClick={props.startGame}>{props.database.startButtonText}</button>

		</div>
	)
}

export default StartScreen