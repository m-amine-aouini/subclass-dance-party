// Creates and returns a new Sponge object that can step
var makeSponge = function (top, left, timeBetweenSteps) {

  var Sponge = {};

  // use jQuery to create an HTML <span> tag
  Sponge.$node = $('<img class="dancingSponge" src="https://media3.giphy.com/media/yqMtk0TfjRa5W/source.gif" alt="spongeBob dancing">');

  Sponge.step = function () {
    // the basic Sponge doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(Sponge.step, timeBetweenSteps);
  };
  Sponge.step();

  Sponge.setPosition = function (top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    Sponge.$node.css(styleSettings);
  };

  // now that we have defined the Sponge object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  Sponge.setPosition(top, left);

  return Sponge;
};