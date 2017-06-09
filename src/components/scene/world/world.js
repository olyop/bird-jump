// Import React
import React from 'react'

// Import CSS
import './world.css'

// Import functions
import rand from '../../helpers/random'

// Import wall generator
import WallGenerator from './wall-generator/wall-generator'

class World extends React.Component {
	render() {
		
		
		return (
			<div className="world">
				
				{for (var i = 0; i < 4; i++) {
					<WallGenerator />
				}}
				
			</div>
		)
	}
}

export default World