// Import React
import React from 'react'

const WallGenerator = props => {
	return (
		<div className="wall-inner" style={{ left: props.item.num }}>
		
			<div className="wall wall-top" style={{ height: String(props.item.topHeight) + 'px' }}></div>
			
			{props.item.hasBonus ? (
				<div className="wall-bonus" style={{
					top: 600 - props.item.bottomHeight - (600 - props.item.bottomHeight - props.item.topHeight),
					height: 600 - props.item.bottomHeight - props.item.topHeight
				}}>
					<i className="material-icons">star</i>
				</div>
			) : null}
			
			<div className="wall wall-bottom" style={{ height: String(props.item.bottomHeight) + 'px' }}></div>
			
		</div>
	)
}

export default WallGenerator