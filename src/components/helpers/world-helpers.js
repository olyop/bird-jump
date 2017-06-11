const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateWorldLevel = (startingIndex, incrementNum, incrementEnd, difficultyLevel) => {
	
	// Account for difficulty setting
	let starChance
	if (difficultyLevel === 0) { starChance = 5 }
	if (difficultyLevel === 1) { starChance = 6 }
	if (difficultyLevel === 2) { starChance = 7 }
	
	// Create empty level array
	let arr = []
	
	// Generate Level
	for (var i = startingIndex; i <= incrementEnd; i++) {
		arr.push({
			num: i * incrementNum,
			hasBonus: rand(0, 10) >= starChance ? true : false
		})
	}
	
	return arr
}

export { rand, generateWorldLevel  }