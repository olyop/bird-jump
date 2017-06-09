// Import React
import React from 'react'

// Import functions
import rand from '../../../helpers/random'

const WallGenerator = props => {
	
	return (
		<div className="wall-inner" style={{ left: props.left }}>
		
			<div className="wall wall-top" style={{ height: String(rand(100, 200)) + 'px' }}></div>
			<div className="wall wall-bottom" style={{ height: String(rand(100, 200)) + 'px' }}></div>
			
		</div>
	)
}

export default WallGenerator