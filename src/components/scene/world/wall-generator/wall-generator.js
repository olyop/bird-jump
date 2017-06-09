// Import React
import React from 'react'

// Import functions
import rand from '../../../helpers/random'

const WallGenerator = () => {
	
	return (
		<div className="wall-inner">
		
			<div className="wall wall-top" style={{ height: rand(100, 250) }}></div>
			<div className="wall wall-bottom" style={{ height: rand(100, 250) }}></div>
			
		</div>
	)
}

export default WallGenerator