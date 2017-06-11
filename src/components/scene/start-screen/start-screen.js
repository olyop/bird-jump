// Import React
import React from 'react'

// Import CSS
import './start-screen.css'

const StartScreen = props => {
	return (
		<div className="start-screen">

			<h1>{props.database.gameTitle}</h1>
			
			<div className="difficulty-counter">
				
				<div className="difficulty-button">
					{props.gameState.difficultyLevel === 0 ? null : (
						<i className="material-icons" onClick={props.makeDifficultyEasier}>keyboard_arrow_left</i>
					)}
				</div>
				
				<span>{props.database.difficultyLevelNames[props.gameState.difficultyLevel]}</span>
				
				<div className="difficulty-button">
					{props.gameState.difficultyLevel === 2 ? null : (
						<i className="material-icons" onClick={props.makeDifficultyHarder}>keyboard_arrow_right</i>
					)}
				</div>
				
			</div>
			
			<button onClick={props.startGame}>{props.database.startButtonText}</button>

		</div>
	)
}

export default StartScreen