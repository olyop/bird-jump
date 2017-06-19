// Import React
import React from 'react'

// Import CSS
import './world.css'

// Import components
import Bird from './bird/bird'
import Sun from './sun/sun'
import Walls from './walls/walls'
import Exit from './exit/exit'

class World extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			scroll: 0
		}
	}
	
	componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 33 )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({ scroll: this.state.scroll + 4 })
  }
	
	render() {
		
		const props = this.props
		
		// eslint-disable-next-line
		if (document.getElementById('world') != undefined) {
			document.getElementById('world').scrollLeft = this.state.scroll
		}
		
		return (
			<div className="world"
				id="world">
				
				<Bird gameState={props.gameState}
					left={this.state.scroll + 265} />
				
				<Sun />
				
				<Walls gameState={props.gameState} />
				
				<Exit gameState={props.gameState}
					closeGame={props.closeGame} />
				
			</div>
		)
	}
}

export default World