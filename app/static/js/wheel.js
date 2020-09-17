// https://github.com/miguelmota/prize-wheel

// Wheel settings object
var settings = {
  el: "#wheel", // Canvas ID
  members: Object.keys(voices), // Array of members
  colors: Object.values(voices), // Background color of each member
  radius: 250, // wheel radius
};

// Create a wheel instance with settings
var wheel = new PrizeWheel(settings);

// Initialize the wheel
wheel.init();

// Spin the wheel with a callback after it is done
wheel.spin(function (member) {
  //alert(member);
  console.log(member);
  document.getElementById("funnyVoice").innerHTML = `${member}`;
});
