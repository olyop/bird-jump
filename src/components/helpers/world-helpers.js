const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateWorldLevel = (startingIndex, incrementNum, incrementEnd, difficultyLevel) => {
	
	// Create empty level array
	let arr = []
	
	// Generate level
	for (var i = startingIndex; i <= incrementEnd; i++) {
		
		// Account for difficulty setting
		let wallMin, wallMax, starChance

		if (difficultyLevel === 0) {
			wallMin = 150
			wallMax = 225
			starChance = 5
		}
		if (difficultyLevel === 1) {
			wallMin = 175
			wallMax = 250
			starChance = 6
		}
		if (difficultyLevel === 2) {
			wallMin = 175
			wallMax = 275
			starChance = 7
		}
	
		let topH = Number(rand(wallMin, wallMax)),
			bottomH = Number(rand(wallMin, wallMax))
		
		arr.push({
			num: i * incrementNum,
			hasBonus: rand(0, 10) >= starChance ? true : false,
			topHeight: topH,
			bottomHeight: bottomH
		})
	}
	
	return arr
}

export { rand, generateWorldLevel  }