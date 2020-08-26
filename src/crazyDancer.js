var MakeCrazyDancer = function(top, left, timeBetweenSteps) {
  //Call dancer props to new instance
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //Create node for jquery to modify
  this.$node.addClass('crazyDancer');
  this.$node.attr('src', 'https://webstockreview.net/images/clipart-banner-bee-10.png');
};


MakeCrazyDancer.prototype = Object.create(MakeDancer.prototype);
MakeCrazyDancer.prototype.constructor = MakeCrazyDancer;

MakeCrazyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({height: '100px'});
  this.$node.animate({height: '200px'});
  var node = this.$node;
  this.$node.hover(function () {
    node.fadeOut();
  }, function() {
    node.fadeIn();
  });
};


