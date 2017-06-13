// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import Components
import Scene from './components/scene/scene'
import Score from './components/score/score'

// Import Database
import databaseImport from './database'

// Import functions
import { generateWorldLevel } from './components/helpers/world-helpers'

// Index
class Index extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			hasGameStarted: true,
			score: 0,
			difficultyLevel: 0,
      world: generateWorldLevel(4, 300, 50, 0)
		}
		
		this.startGame = this.startGame.bind(this)
		this.closeGame = this.closeGame.bind(this)
		this.makeDifficultyEasier = this.makeDifficultyEasier.bind(this)
		this.makeDifficultyHarder = this.makeDifficultyHarder.bind(this)
		this.incrementScore = this.incrementScore.bind(this)
	}
	
	startGame() {
		this.setState({ hasGameStarted: true })
	}
	
	closeGame() {
		this.setState({ hasGameStarted: false })
	}
	
	makeDifficultyEasier() {
		if (this.state.difficultyLevel > 0) {
			this.setState({ difficultyLevel: this.state.difficultyLevel - 1 })
		}
	}
	
	makeDifficultyHarder() {
		if (this.state.difficultyLevel < 2) {
			this.setState({ difficultyLevel: this.state.difficultyLevel + 1 })
		}
	}
	
	incrementScore() {
		this.setState({ score: this.state.score + 1 })
	}
	
	render() {
		
		const database = this.props.database
		
		return (
			<div className="index">
				<div className="index-inner">

					<Scene gameState={this.state} database={database}
						makeDifficultyEasier={this.makeDifficultyEasier}
						makeDifficultyHarder={this.makeDifficultyHarder}
						startGame={this.startGame}
						closeGame={this.closeGame} />

					<Score gameState={this.state} database={database}
						incrementScore={this.incrementScore} />

				</div>
			</div>
		)
	}
	
}

// Render to DOM
ReactDOM.render(
  <Index database={databaseImport} />,
  document.getElementById('root')
)