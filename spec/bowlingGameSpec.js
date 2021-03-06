describe('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('can roll gutter game', function() {
     rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it("should handle rolling all ones", function() {
     rollMany(1, 20);
     expect(game.score()).toEqual(20);
  });

  it("can roll a spare", function() {
    game.roll(5)
    game.roll(5)
    game.roll(5)
    rollMany(0, 17)
    expect(game.score()).toEqual(20);
  });

  it('can roll a strike', function() {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(0, 16);
    expect(game.score()).toEqual(24);
  });

  it('gives score for perfect game', function() {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  })

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  }

});
