////////////////////////////////////////////////

// GENERATIVE POSTS DETAILS

///////////////////////////////////////////////
var genD1P1, genD2P1, genD1P2, genD2P2, genD1P3, genD2P3;

genPD(5, 'P1', genD1P1, 289, -480, genColor[0], "1");
genPD(6, 'P1', genD2P1, -289, 400, genColor[1], "1");
genPD(5, 'P2', genD1P2, 289, -480, genColor[2], "1");
genPD(6, 'P2', genD2P2, -289, 400, genColor[3], "1");
genPD(5, 'P3', genD1P3, 289, -480, genColor[4], "1");
genPD(6, 'P3', genD2P3, -289, 400, genColor[5], "1");

function genPD(layer, postNumber, detailNumber, posX, posY, detailColor, detailOpacity) {
  var artboardLayer = "layer" + layer + postNumber;
  var detail = new Image();

  detail.src = detailsFolder + detailNumber + ".svg";
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

// GENERATIVE POSTS BACKGROUND

///////////////////////////////////////////////
genPB('3d', 1, backgroundP1);
genPB('3d', 2, backgroundP2);
genPB('3d', 3, backgroundP3);

function genPB(prompt, id, layerType) {
  var image = new Image()
  image.src = "https://source.unsplash.com/random/1080x1920?" + prompt + "?v=" + id;
  image.onload = function () {
    layerType.globalCompositeOperation = "blendMode";
    layerType.globalAlpha = 0.4;
    layerType.drawImage(image, 0, 0);
    layerType.globalCompositeOperation = 'destination-over';
  }
}

////////////////////////////////////////////////

// GENERATIVE GRADIENT BACKGROUND

///////////////////////////////////////////////
genPG(backgroundP1, gradientType1, "#f2f2f2", "#dddddd");
genPG(backgroundP2, gradientType2, "#f2f2f2", "#dddddd");
genPG(backgroundP3, gradientType3, "#f2f2f2", "#dddddd");

function genPG(layerType, gradientType, gradientStart, gradientEnd) {
  var gradient = layerType.createLinearGradient.apply(layerType, gradientType);
  gradient.addColorStop(0, gradientStart);
  gradient.addColorStop(1, gradientEnd);
  layerType.fillStyle = gradient;
  layerType.fillRect(0, 0, postCanvasX, postCanvasY);
}
