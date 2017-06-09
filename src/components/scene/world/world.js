// Import React
import React from 'react'

// Import CSS
import './world.css'

// Import wall generator
import WallGenerator from './wall-generator/wall-generator'

class World extends React.Component {
	render() {
		
		const wallArray = [800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400]
		
		return (
			<div className="world">
				
				{wallArray.map((item, index) => (
					<WallGenerator key={index} left={item} />
				))}
				
			</div>
		)
	}
}

export default World