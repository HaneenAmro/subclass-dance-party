var MakeSpinningDancer = function(top, left, timeBetweenSteps) {
  //Call dancer props to new instance
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //Create node for jquery to modify
  this.$node.addClass('spinningDancer');
  this.$node.attr('src', 'https://webstockreview.net/images/clipart-banner-bee-10.png');

};


MakeSpinningDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinningDancer.prototype.constructor = MakeSpinningDancer;

MakeSpinningDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  var node2 = this.$node;
  // node2.hover(function() {
  //   node2.toggleClass('shake');
  // }, function() {
  //   node2.toggleClass('spinningDancer');
  // });
};

