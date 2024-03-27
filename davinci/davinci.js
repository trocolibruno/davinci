////////////////////////////////////////////////

// MATH RANDOM COLORS 

///////////////////////////////////////////////

var originalColor = [selectedColor1, selectedColor2, selectedColor3];
var aiColor = originalColor.slice();
for (var i = 0; i < 4; i++) {
  var shuffleColors = originalColor.slice();
  shuffleArray(shuffleColors);
  aiColor = aiColor.concat(shuffleColors);
}
shuffleArray(aiColor);
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

////////////////////////////////////////////////

// GENERATIVE DETAILS - POSTS

///////////////////////////////////////////////

genPD(5, 'P1', aiDetail1_P1, 289, -480, aiColor[0], "1");
genPD(6, 'P1', aiDetail2_P1, -289, 400, aiColor[1], "1");
genPD(5, 'P2', aiDetail1_P2, 289, -480, aiColor[2], "1");
genPD(6, 'P2', aiDetail2_P2, -289, 400, aiColor[3], "1");
genPD(5, 'P3', aiDetail1_P3, 289, -480, aiColor[4], "1");
genPD(6, 'P3', aiDetail2_P3, -289, 400, aiColor[5], "1");

function genPD(layer, postNumber, detailNumber, posX, posY, detailColor, detailOpacity) {
  var artboardLayer = "layer" + layer + postNumber;
  var detail = new Image();
  detail.src = aiDetailsFolder + detailNumber + ".svg";

  detail.onload = function () {
    var canvas = document.getElementById(artboardLayer);
    var genD = canvas.getContext('2d');
    genD.drawImage(detail, posX, posY);
    genD.globalAlpha = detailOpacity;

    var redrawVector = canvas.getContext('2d');
    redrawVector.fillStyle = detailColor;
    redrawVector.globalCompositeOperation = 'source-in';
    redrawVector.fillRect(0, 0, canvas.width, canvas.height);
  }
}

////////////////////////////////////////////////

// GENERATIVE BACKGROUND - POSTS

///////////////////////////////////////////////

// genPB(1, aiBackgroundPost1, backgroundP1);
// genPB(2, aiBackgroundPost2, backgroundP2);
// genPB(3, aiBackgroundPost3, backgroundP3);

function genPB(id, backgroundNumber, layerType) {
  var image = new Image();
  image.src = aiBackgroundsFolder + backgroundNumber + ".jpg";

  image.onload = function () {
    layerType.globalCompositeOperation = "blendMode";
    layerType.globalAlpha = 0.6;
    layerType.drawImage(image, 0, 0);
    layerType.globalCompositeOperation = 'destination-over';
  }
}

////////////////////////////////////////////////

// GENERATIVE GRADIENT BACKGROUND - POSTS

///////////////////////////////////////////////

genPG(backgroundP1, aiGradient1, aiColor[6], aiColor[7]);
genPG(backgroundP2, aiGradient2, aiColor[8], aiColor[9]);
genPG(backgroundP3, aiGradient3, aiColor[10], aiColor[11]);

function genPG(layerType, gradientType, gradientStart, gradientEnd) {
  var gradient = layerType.createLinearGradient.apply(layerType, gradientType);
  gradient.addColorStop(0, gradientStart);
  gradient.addColorStop(1, gradientEnd);
  layerType.fillStyle = gradient;
  layerType.fillRect(0, 0, postCanvasX, postCanvasY);
}
