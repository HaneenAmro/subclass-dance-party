var MakeCrazyDancer = function(top, left, timeBetweenSteps) {
  //Call dancer props to new instance
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //Create node for jquery to modify
  this.$node = $('<div class="crazyDancer"></div>');
  this._top = top;
  this._left = left;
};


MakeCrazyDancer.prototype = Object.create(MakeDancer.prototype);
MakeCrazyDancer.prototype.constructor = MakeCrazyDancer;

MakeCrazyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({height: '2px'});
  this.$node.animate({height: '100px'});
  this.$node.mouseover(function() {
    this.$node.css('background-color', 'black');
  });
  this.setPosition(this._top, this._left);
};

