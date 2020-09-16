// Wheel settings object
var settings = {
  el: "#wheel", // Canvas ID
  members: ["Angry", "Happy", "Sad", "Elderly", "Snakey", "Sleepy"], // Array of members
  colors: ["#C7181D", "#FFFF33", "#5555FF", "#FFFFFF", "#00FF00", "#999999"], // Background color of each member
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
