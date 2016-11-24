function getBaitAndLure(saltWater, rodType, motorHorsePower) {

  if (motorHorsePower > 9000) {
    var lure = 'speedLure'
  } else if (motorHorsePower < 9000) {
    var lure = 'regularLure'
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
