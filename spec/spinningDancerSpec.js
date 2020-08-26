describe('spinningDancer', function() {

  var spinningDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new MakeSpinningDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node ', function() {
  //   sinon.spy(spinningDancer.$node, 'animate');
  //   spinningDancer.step();
  //   expect(spinningDancer.$node.animate.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spinningDancer, 'step');
      expect(spinningDancer.step.callCount).to.be.equal(0);
      console.log(spinningDancer.step.callCount);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);


      expect(spinningDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinningDancer.step.callCount).to.be.equal(2);
    });
  });
});
