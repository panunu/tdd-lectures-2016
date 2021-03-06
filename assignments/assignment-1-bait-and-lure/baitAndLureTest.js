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
