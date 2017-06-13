// Import React
import React from 'react'

// Import CSS
import './world.css'
import './world-sun.css'

// Import components
import SpriteAnimator from 'react-sprite-animator'

// Import wall generator
import WallGenerator from './wall-generator/wall-generator'

// Import Bird
import BirdPNG from './bird.png'

class World extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			scroll: 0,
			birdTop: 100,
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
				
				<div className="bird"
					style={{
						left: this.state.scroll + 200,
						top: this.state.birdTop,
					}}>
					
					<SpriteAnimator
						sprite={BirdPNG}
						fps={7}
						width={68}
						height={48} />
					
				</div>
				
				<div className="world-exit" onClick={props.closeGame}>
					<i className="material-icons">close</i>
				</div>
				
				<div className="sun">
					<div className="ray_box">
						<div className="ray ray1"></div>
						<div className="ray ray2"></div>
						<div className="ray ray3"></div>
						<div className="ray ray4"></div>
						<div className="ray ray5"></div>
						<div className="ray ray6"></div>
						<div className="ray ray7"></div>
						<div className="ray ray8"></div>
						<div className="ray ray9"></div>
						<div className="ray ray10"></div>
					</div>
				</div>
				
				<div className="walls">
				
					{props.gameState.world.map((item, index) => (
						<WallGenerator key={index}
							item={item}
							hasBonus={item.hasBonus}
							gameState={props.gameState}/>
					))}
					
				</div>
				
			</div>
		)
	}
}

export default World