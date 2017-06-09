// Import React
import React from 'react'

// Import CSS
import './world.css'

// Import wall generator
import WallGenerator from './wall-generator/wall-generator'

class World extends React.Component {
	render() {
		
		
		return (
			<div className="world">
				
				<WallGenerator />
				
			</div>
		)
	}
}

export default World