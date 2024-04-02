////////////////////////////////////////////////

// CREATE FOCUS IMAGE

///////////////////////////////////////////////
var postFocus = new Image();
postFocus.src = 'models/example-girl.png';
postFocus.onload = function () {
  focusP1.drawImage(postFocus, 0, 0);
  focusP2.drawImage(postFocus, 0, 0);
  focusP3.drawImage(postFocus, 0, 0);
}

// var storyFocus = new Image();
// storyFocus.src = 'models/example.png';
// storyFocus.onload = function () {
//   focusS1.drawImage(storyFocus, 0, 400);
//   focusS2.drawImage(storyFocus, 0, 400);
//   focusS3.drawImage(storyFocus, 0, 400);
// }