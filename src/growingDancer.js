var MakeGrowingDancer = function(top, left, timeBetweenSteps) {
  //Call dancer props to new instance
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //Create node for jquery to modify
  this.$node = $('<div class="growingDancer"></div>');
  this._top = top;
  this._left = left;
};


MakeGrowingDancer.prototype = Object.create(MakeDancer.prototype);
MakeGrowingDancer.prototype.constructor = MakeGrowingDancer;

MakeGrowingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({width: '2px'});
  this.$node.animate({width: '100px'});
  this.setPosition(this._top, this._left);
};