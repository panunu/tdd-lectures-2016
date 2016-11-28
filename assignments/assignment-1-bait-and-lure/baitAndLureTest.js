describe("Get proper baits and lures for powerboats", function() {
  it("get a spaghetti bait with speedlure in salty waters", function() {
    var result = getBaitAndLure(true, 'long', 9500);
    expect(result).toEqual(['saltySpaghettiBait', 'speedLure']);
  });

  it("get a meatball bait with speedlure", function() {
    var result = getBaitAndLure(true, 'short', 9001);
    expect(result).toEqual(['saltyMeatballBait', 'speedLure']);
  });

  it("get a strawberry bait with speedlure in fresh waters", function() {
    var result = getBaitAndLure(false, 'short', 119500);
    expect(result).toEqual(['freshStrawberryBait', 'speedLure']);
  });

  it("get a regularlure with horsepower of 9000", function() {
    var result = getBaitAndLure(false, 'short', 9000);
    expect(result).toEqual(['freshStrawberryBait', 'regularLure']);
  });

  it("fail if no horsepower defined", function() {
    // why doesn't Jasmine catch the error?
    // expect(getBaitAndLure(false, 'short')).toThrowError(Error);

    // workaround for testing the failing case
    try {
      getBaitAndLure(false, 'short')

      fail('There should have been an expection')
    } catch (e) {
      expect(e.message).toEqual('undefined horsepower');
    }

  });
});

describe("Get proper baits and lures for rowboats and such", function() {
  it("get a spaghetti bait with speedlure in salty waters", function() {
    var result = getBaitAndLure(true, 'long', 20);
    expect(result).toEqual(['saltySpaghettiBait', 'regularLure']);
  });

  it("get a meatball bait with speedlure", function() {
    var result = getBaitAndLure(true, 'short', 0);
    expect(result).toEqual(['saltyMeatballBait', 'regularLure']);
  });

  it("get a strawberry bait with speedlure in fresh waters", function() {
    var result = getBaitAndLure(false, 'short', 8990);
    expect(result).toEqual(['freshStrawberryBait', 'regularLure']);
  });
})



describe("Get lures for different horsepowers", function() {
  it("gets a speedlure lure for large horsepowers", function() {
    var result = getLure(9001);
    var result = getLure(8329001);
    expect(result).toEqual('speedLure');
  });

  it("gets a regular lure lure for low or zero horsepowers", function() {
    var result = getLure(0);
    expect(result).toEqual('regularLure');

    var result = getLure(20);
    expect(result).toEqual('regularLure');

    var result = getLure(9000);
    expect(result).toEqual('regularLure');
  });
});

describe("Baits", function() {
  it("return baits for water and rod combinations", function() {
    var result = getBait(false, 'short', 8990);
    expect(result).toEqual('freshStrawberryBait');

    var result = getBait(false, 'long', 8990);
    expect(result).toEqual('freshSausageBait');

    var result = getBait(true, 'short', 8990);
    expect(result).toEqual('saltyMeatballBait');

    var result = getBait(true, 'long', 8990);
    expect(result).toEqual('saltySpaghettiBait');
  });
});
