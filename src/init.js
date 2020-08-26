$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // var dancerMakerFunction = MakeDancer();
    //console.log(dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });


  $('.line-up').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
    // $('.dancer').css('top', '500px');
    // console.log(window.dancers);
  });

  // $('.pair').on('click', function(event) {
  //   for (var i = 0; i < window.dancers.length; i  2) {
  //     if (window.dancers[i + 1]) {
  //       var next = window.dancers[i + 1];
  //       var current = window.dancers[i];
  //     }
  //     //Getting the selected nodes position
  //     for (var j = 0; j < window.dancers.length; j++) {
  //       //we can find the closest node by iterating through all of them

  //       //if they are close then we move together

  //     }
  //   }
  // });
});

//a^2 + b^2 = c^2 Equation

//top^2 + left^2 = position^2
//z = position^2
//is (z > .25*screen .)

// [x] [b]
// [c] [a]

//Subtract positions to find closest pairs