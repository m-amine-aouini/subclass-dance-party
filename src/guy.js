// Creates and returns a new Guy object that can step
var makeGuy = function (top, left, timeBetweenSteps) {

  var Guy = {};

  // use jQuery to create an HTML <span> tag
  Guy.$node = $('<img class="dancingGuy" src="https://media0.giphy.com/media/wn8rVP7qC8TNC/giphy.gif" alt="Guy dancing">');

  Guy.step = function () {
    // the basic Guy doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(Guy.step, timeBetweenSteps);
  };
  Guy.step();

  Guy.setPosition = function (top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    Guy.$node.css(styleSettings);
  };

  // now that we have defined the Guy object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  Guy.setPosition(top, left);

  return Guy;
};