function getBaitAndLure(saltWater, rodType, motorHorsePower) {
  return [getBait(saltWater, rodType), getLure(motorHorsePower)]
}


function getLure(motorHorsePower) {
  if (typeof motorHorsePower === 'undefined') {
    throw new Error('undefined horsepower')
  }

  var lure = 'regularLure'

  if (motorHorsePower > 9000) {
    lure = 'speedLure'
  }

  return lure
}

function getBait(saltWater, rodType) {
  if (saltWater) {
    if (rodType === 'long') {
      return'saltySpaghettiBait'
    } else {
      return'saltyMeatballBait'
    }
  }

  if (rodType === 'short') {
    return'freshStrawberryBait'
  } else if (rodType === 'long') {
    return'freshSausageBait'
  }
}
