////////////////////////////////////////////////

// CREATE FOCUS IMAGE

///////////////////////////////////////////////

var postFocus = new Image();
postFocus.onload = function () {
  focusP1.drawImage(postFocus, 0, 0);
  focusP2.drawImage(postFocus, 0, 0);
  focusP3.drawImage(postFocus, 0, 0);
}

var imageData = localStorage.getItem('image');
if (imageData) {
  postFocus.src = imageData;
} else {
  //fallback 
  // postFocus.src = 'models/fallback.png';
}

