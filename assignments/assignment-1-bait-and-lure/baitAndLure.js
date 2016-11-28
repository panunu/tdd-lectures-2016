function getBaitAndLure(saltWater, rodType, motorHorsePower) {

  if (typeof motorHorsePower === 'undefined') {
    throw new Error('undefined horsepower')
  }

  var lure = 'regularLure'

  if (motorHorsePower > 9000) {
    lure = 'speedLure'
  }

  if (saltWater) {
    if (rodType === 'long') {
      var combo = ['saltySpaghettiBait', lure]
    } else {
      var combo = ['saltyMeatballBait', lure]
    }

    return combo
  } else {

    if (rodType === 'short') {
      var combo = ['freshStrawberryBait', lure]
    } else if (rodType === 'long') {
      var combo = ['freshSausageBait', lure]
    }

    return combo
  }
}
