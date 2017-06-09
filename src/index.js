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

// Index
class Index extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			hasGameStarted: true,
			score: 0
		}
		
		this.startGame = this.startGame.bind(this)
		this.incrementScore = this.incrementScore.bind(this)
	}
	
	startGame() {
		this.setState({ hasGameStarted: true })
	}
	
	incrementScore() {
		this.setState({ score: this.state.score + 1 })
		console.log(this.state)
	}
	
	render() {
		
		const database = this.props.database
		
		return (
			<div className="index">
				<div className="index-inner">

					<Scene gameState={this.state} database={database}
						startGame={this.startGame} />

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