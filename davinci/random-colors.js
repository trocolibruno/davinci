////////////////////////////////////////////////

// SET COLORS AND RANDOMIZE

///////////////////////////////////////////////
var defaultColor1 = "#4E4E4E";
var defaultColor2 = "#F48072";
var defaultColor3 = "#CCCCCC";

var originalColor = [defaultColor1, defaultColor2, defaultColor3];
var genColor = originalColor.slice();
for (var i = 0; i < 4; i++) {
  var shuffleColors = originalColor.slice();
  shuffleArray(shuffleColors);
  genColor = genColor.concat(shuffleColors);
}
shuffleArray(genColor);
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}