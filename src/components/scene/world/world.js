// Import React
import React from 'react'

// Import CSS
import './world.css'

// Import components
import Wall from './wall/wall'
import Sun from './sun/sun'
import Bird from './bird/bird'

class World extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			scroll: 0,
			birdTop: 265,
		}
	}
	
	componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 33 )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      scroll: this.state.scroll + 4,
			birdTop: this.state.birdTop + 0.2
    })
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
					left={this.state.scroll + 265}
					top={this.state.birdTop} />
				
				<div className="world-exit" onClick={props.closeGame}>
					<i className="material-icons">close</i>
				</div>
				
				<Sun />
				
				<div className="walls">
				
					{props.gameState.world.map((item, index) => (
						<Wall key={index}
							item={item}
							hasBonus={item.hasBonus}
							gameState={props.gameState} />
					))}
					
				</div>
				
			</div>
		)
	}
}

export default World