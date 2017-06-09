// Import React
import React from 'react'

// Import Components
import World from './world/world'
import StartScreen from './start-screen/start-screen'

// Import CSS
import './scene.css'

// Import scene background
import sceneBackground from './scene-background.png'

class Scene extends React.Component {
	
	render() {
		
		const props = this.props
		
		return (
			<div className="scene"
				style={{ backgroundImage: 'url(' + sceneBackground + ')' }} >
				
				{props.gameState.hasGameStarted ? (
					<World gameState={props.gameState} database={props.database} />
				) : (
					<StartScreen gameState={props.gameState} database={props.database}
						startGame={props.startGame} />
				)}
					
			</div>
		)
	}
}

export default Scene