// Import React
import React from 'react'

// Import components
import DifficultyCounter from './difficulty-counter/difficulty-counter'

// Import CSS
import './start-screen.css'

// Game title
const GameTitle = props => (
	<h1>{props.database.gameTitle}</h1>
)

// Start game button
const StartGameButton = props => (
	<button onClick={props.startGame}>{props.database.startButtonText}</button>
)

const StartScreen = props => {
	return (
		<div className="start-screen">

			<GameTitle database={props.database} />
			
			<DifficultyCounter gameState={props.gameState} database={props.database}
				makeDifficultyEasier={props.makeDifficultyEasier}
				makeDifficultyHarder={props.makeDifficultyHarder} />
			
			<StartGameButton database={props.database}
				startGame={props.startGame} />

		</div>
	)
}

export default StartScreen