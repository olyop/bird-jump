// Import React
import React from 'react'

// Import CSS
import './start-screen.css'

const StartScreen = props => {
	return (
		<div className="start-screen">

			<h1>{props.database.gameTitle}</h1>
			<button onClick={props.startGame}>{props.database.startButtonText}</button>

		</div>
	)
}

export default StartScreen