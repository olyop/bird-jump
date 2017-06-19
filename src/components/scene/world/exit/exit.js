// Import React
import React from 'react'

// Import CSS
import './exit.css'

const Exit = props => (
	<div className="world-exit" onClick={props.closeGame}>
		<i className="material-icons">close</i>
	</div>
)

export default Exit