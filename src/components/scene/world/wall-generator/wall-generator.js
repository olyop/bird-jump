// Import React
import React from 'react'

// Import functions
import { rand } from '../../../helpers/world-helpers'

const WallGenerator = props => {
	
	// Account for difficulty setting
	let wallMin, wallMax
	
	if (props.gameState.difficultyLevel === 2) {
		wallMin = 175
		wallMax = 275
	} else if (props.gameState.difficultyLevel === 1) {
		wallMin = 175
		wallMax = 250
	} else if (props.gameState.difficultyLevel === 0) {
		wallMin = 150
		wallMax = 225
	}
	
	let topHeight = Number(rand(wallMin, wallMax)),
			bottomHeight = Number(rand(wallMin, wallMax))
	
	return (
		<div className="wall-inner" style={{ left: props.left }}>
		
			<div className="wall wall-top" style={{ height: String(topHeight) + 'px' }}></div>
			
			{props.hasBonus ? (
				<div className="wall-bonus" style={{
					top: 600 - bottomHeight - (600 - bottomHeight - topHeight),
					height: 600 - bottomHeight - topHeight
				}}>
					<i className="material-icons">star</i>
				</div>
			) : null}
			
			<div className="wall wall-bottom" style={{ height: String(bottomHeight) + 'px' }}></div>
			
		</div>
	)
}

export default WallGenerator