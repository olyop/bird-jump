// Import React
import React from 'react'

// Import CSS
import './world.css'
import './world-sun.css'

// Import wall generator
import WallGenerator from './wall-generator/wall-generator'

// Import functions
import rand from '../../helpers/random'

class World extends React.Component {
	render() {
		
		const props = this.props
		
		// Create Emtpy Increment Array
		let arr = []
		for (var i = 0; i <= 200; i++) {
			arr.push({
				num: i * 275,
				hasBonus: rand(0, 10) >= 5 ? true : false
			})
		}
		
		return (
			<div className="world"
				id="world">
				
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
				
					{arr.map((item, index) => (
						<WallGenerator key={index} left={item.num}
							hasBonus={item.hasBonus}
							gameState={props.gameState}/>
					))}
					
				</div>
				
			</div>
		)
	}
}

export default World