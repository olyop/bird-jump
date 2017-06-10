// Import React
import React from 'react'

// Import CSS
import './score.css'

class Score extends React.Component {
	
	render() {
		
		const props = this.props
		
		return (
			<div className="score">
				<div className="score-buttons">
					<button className="jump-button">
						<i className="material-icons">arrow_upward</i>
					</button>
				</div>
				<div className="current-score">
					<p onClick={props.incrementScore}>{props.gameState.score}</p>
				</div>
			</div>
		)
	}
}

export default Score