// Import React
import React from 'react'

// Import Components
import World from './world/world'
import StartScreen from './start-screen/start-screen'

// Import CSS
import './scene.css'

class Scene extends React.Component {
	
	render() {
		
		const props = this.props
		
		return (
			<div className="scene">
				
				{props.gameState.hasGameStarted ? (
					<World gameState={props.gameState} database={props.database}
						closeGame={props.closeGame} />
				) : (
					<StartScreen gameState={props.gameState} database={props.database}
						makeDifficultyEasier={props.makeDifficultyEasier}
						makeDifficultyHarder={props.makeDifficultyHarder}
						startGame={props.startGame} />
				)}
					
			</div>
		)
	}
}

export default Scene