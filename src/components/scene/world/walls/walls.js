// Import React
import React from 'react'

// Import css
import './walls.css'

const Wall = props => {
	
	const wallTopStyle = { height: String(props.item.topHeight) + 'px' },
			wallBottomStyle = { height: String(props.item.bottomHeight) + 'px' }
	
	const wallBonusStyle = {
		top: 600 - props.item.bottomHeight - (600 - props.item.bottomHeight - props.item.topHeight),
		height: 600 - props.item.bottomHeight - props.item.topHeight
	}
	
	return (
		<div className="wall-inner"
			style={{ left: props.item.num }}>

			<div className="wall wall-top"
				style={wallTopStyle}></div>

			{props.item.hasBonus ? (
				<div className="wall-bonus"
					style={wallBonusStyle}>
					<i className="material-icons">star</i>
				</div>
			) : null}

			<div className="wall wall-bottom"
				style={wallBottomStyle}></div>

		</div>
	)
}

const Walls = props => (
	<div className="walls">

		{props.gameState.world.map((item, index) => (
			<Wall key={index}
				item={item}
				hasBonus={item.hasBonus}
				gameState={props.gameState} />
		))}

	</div>
)

export default Walls