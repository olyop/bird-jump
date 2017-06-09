// Import React
import React from 'react'

// Import CSS
import './score.css'

class Score extends React.Component {
	
	render() {
		
		const props = this.props
		
		return (
			<div className="score">
				<p onClick={props.incrementScore}>{props.gameState.score}</p>
			</div>
		)
	}
}

export default Score