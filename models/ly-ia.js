////////////////////////////////////////////////

// CREATE LAYERS

///////////////////////////////////////////////
var postCanvasX = 1080;
var postCanvasY = 1080;

var logoP1       = layer1P1.getContext('2d');
var fxP1         = layer2P1.getContext('2d');
var textP1       = layer3P1.getContext('2d');
var focusP1      = layer4P1.getContext('2d');
var detail1P1    = layer5P1.getContext('2d');
var detail2P1    = layer6P1.getContext('2d');
var backgroundP1 = layer7P1.getContext('2d');

var logoP2       = layer1P2.getContext('2d');
var fxP2         = layer2P2.getContext('2d');
var textP2       = layer3P2.getContext('2d');
var focusP2      = layer4P2.getContext('2d');
var detail1P2    = layer5P2.getContext('2d');
var detail2P2    = layer6P2.getContext('2d');
var backgroundP2 = layer7P2.getContext('2d');

var logoP3       = layer1P3.getContext('2d');
var fxP3         = layer2P3.getContext('2d');
var textP3       = layer3P3.getContext('2d');
var focusP3      = layer4P3.getContext('2d');
var detail1P3    = layer5P3.getContext('2d');
var detail2P3    = layer6P3.getContext('2d');
var backgroundP3 = layer7P3.getContext('2d');

layer1P1.width = postCanvasX;
layer2P1.width = postCanvasX;
layer3P1.width = postCanvasX;
layer4P1.width = postCanvasX;
layer5P1.width = postCanvasX;
layer6P1.width = postCanvasX;
layer7P1.width = postCanvasX;

layer1P2.width = postCanvasX;
layer2P2.width = postCanvasX;
layer3P2.width = postCanvasX;
layer4P2.width = postCanvasX;
layer5P2.width = postCanvasX;
layer6P2.width = postCanvasX;
layer7P2.width = postCanvasX;

layer1P3.width = postCanvasX;
layer2P3.width = postCanvasX;
layer3P3.width = postCanvasX;
layer4P3.width = postCanvasX;
layer5P3.width = postCanvasX;
layer6P3.width = postCanvasX;
layer7P3.width = postCanvasX;

layer1P1.height = postCanvasY;
layer2P1.height = postCanvasY;
layer3P1.height = postCanvasY;
layer4P1.height = postCanvasY;
layer5P1.height = postCanvasY;
layer6P1.height = postCanvasY;
layer7P1.height = postCanvasY;

layer1P2.height = postCanvasY;
layer2P2.height = postCanvasY;
layer3P2.height = postCanvasY;
layer4P2.height = postCanvasY;
layer5P2.height = postCanvasY;
layer6P2.height = postCanvasY;
layer7P2.height = postCanvasY;

layer1P3.height = postCanvasY;
layer2P3.height = postCanvasY;
layer3P3.height = postCanvasY;
layer4P3.height = postCanvasY;
layer5P3.height = postCanvasY;
layer6P3.height = postCanvasY;
layer7P3.height = postCanvasY;

var storyCanvasX = 1080;
var storyCanvasY = 1920;

var logoS1       = layer1S1.getContext('2d');
var fxS1         = layer2S1.getContext('2d');
var textS1       = layer3S1.getContext('2d');
var focusS1      = layer4S1.getContext('2d');
var detail1S1    = layer5S1.getContext('2d');
var detail2S1    = layer6S1.getContext('2d');
var backgroundS1 = layer7S1.getContext('2d');

var logoS2       = layer1S2.getContext('2d');
var fxS2         = layer2S2.getContext('2d');
var textS2       = layer3S2.getContext('2d');
var focusS2      = layer4S2.getContext('2d');
var detail1S2    = layer5S2.getContext('2d');
var detail2S2    = layer6S2.getContext('2d');
var backgroundS2 = layer7S2.getContext('2d');

var logoS3       = layer1S3.getContext('2d');
var fxS3         = layer2S3.getContext('2d');
var textS3       = layer3S3.getContext('2d');
var focusS3      = layer4S3.getContext('2d');
var detail1S3    = layer5S3.getContext('2d');
var detail2S3    = layer6S3.getContext('2d');
var backgroundS3 = layer7S3.getContext('2d');

layer1S1.width = storyCanvasX;
layer2S1.width = storyCanvasX;
layer3S1.width = storyCanvasX;
layer4S1.width = storyCanvasX;
layer5S1.width = storyCanvasX;
layer6S1.width = storyCanvasX;
layer7S1.width = storyCanvasX;

layer1S2.width = storyCanvasX;
layer2S2.width = storyCanvasX;
layer3S2.width = storyCanvasX;
layer4S2.width = storyCanvasX;
layer5S2.width = storyCanvasX;
layer6S2.width = storyCanvasX;
layer7S2.width = storyCanvasX;

layer1S3.width = storyCanvasX;
layer2S3.width = storyCanvasX;
layer3S3.width = storyCanvasX;
layer4S3.width = storyCanvasX;
layer5S3.width = storyCanvasX;
layer6S3.width = storyCanvasX;
layer7S3.width = storyCanvasX;

layer1S1.height = storyCanvasY;
layer2S1.height = storyCanvasY;
layer3S1.height = storyCanvasY;
layer4S1.height = storyCanvasY;
layer5S1.height = storyCanvasY;
layer6S1.height = storyCanvasY;
layer7S1.height = storyCanvasY;

layer1S2.height = storyCanvasY;
layer2S2.height = storyCanvasY;
layer3S2.height = storyCanvasY;
layer4S2.height = storyCanvasY;
layer5S2.height = storyCanvasY;
layer6S2.height = storyCanvasY;
layer7S2.height = storyCanvasY;

layer1S3.height = storyCanvasY;
layer2S3.height = storyCanvasY;
layer3S3.height = storyCanvasY;
layer4S3.height = storyCanvasY;
layer5S3.height = storyCanvasY;
layer6S3.height = storyCanvasY;
layer7S3.height = storyCanvasY;

////////////////////////////////////////////////

// SET COLORS AND RANDOMIZE

///////////////////////////////////////////////
var defaultColor1 = "#ee82ee";
var defaultColor2 = "#200079";
var defaultColor3 = "#f2f2f2";

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


////////////////////////////////////////////////

// GENERATIVE GRADIENTS BACKGROUNDS

///////////////////////////////////////////////
function parseGradientString(gradientString) {
    return gradientString.split(',').map(function(value) {
        return parseFloat(value.trim());
    });
}

// x0, y0, x1, y1
var gradientType1 = "0, 100, 900, 0";
var gradientType2 = "100, 0, 0, 100";
var gradientType3 = "50, 50, 300, 300";
var gradientType4 = "0, 0, 100, 100";
var gradientType5 = "200, 50, 50, 200";
var gradientType6 = "0, 0, 500, 500";
var gradientType7 = "30, 70, 700, 0";
var gradientType8 = "80, 20, 200, 180";
var gradientType9 = "10, 90, 800, 10";
var gradientType10 = "300, 0, 0, 300";
var gradientType11 = "0, 50, 200, 50";
var gradientType12 = "50, 50, 200, 200";
var gradientType13 = "20, 80, 500, 20";
var gradientType14 = "0, 0, 300, 300";
var gradientType15 = "70, 30, 0, 700";
var gradientType16 = "150, 50, 50, 150";
var gradientType17 = "0, 0, 700, 700";
var gradientType18 = "40, 60, 300, 300";
var gradientType19 = "90, 10, 10, 800";
var gradientType20 = "200, 0, 0, 200";
var gradientType21 = "0, 100, 0, 900";
var gradientType22 = "0, 200, 0, 1000";
var gradientType23 = "0, 300, 0, 1200";
var gradientType24 = "0, 400, 0, 1300";
var gradientType25 = "0, 500, 0, 1400";
var gradientType26 = "0, 600, 0, 1500";
var gradientType27 = "0, 700, 0, 900";
var gradientType28 = "0, 800, 0, 1000";
var gradientType29 = "0, 900, 0, 1100";
var gradientType30 = "0, 1000, 0, 1200";
var gradientType31 = "0, 0, 100, 0";
var gradientType32 = "0, 0, 200, 0";
var gradientType33 = "0, 0, 300, 0";
var gradientType34 = "0, 0, 400, 0";
var gradientType35 = "0, 0, 500, 0";
var gradientType36 = "0, 0, 600, 0";
var gradientType37 = "0, 0, 700, 0";
var gradientType38 = "0, 0, 800, 0";
var gradientType39 = "0, 0, 900, 0";
var gradientType40 = "0, 0, 1000, 0";

var gradientTypes = [gradientType1, gradientType2, gradientType3, gradientType4, gradientType5, gradientType6, gradientType7, gradientType8, gradientType9, gradientType10, gradientType11, gradientType12, gradientType13, gradientType14, gradientType15, gradientType16, gradientType17, gradientType18, gradientType19, gradientType20, gradientType21, gradientType22, gradientType23, gradientType24, gradientType25, gradientType26, gradientType27, gradientType28, gradientType29, gradientType30, gradientType31, gradientType32, gradientType33, gradientType34, gradientType35, gradientType36, gradientType37, gradientType38, gradientType39, gradientType40];

function parseGradientString(gradientArray) {
    var randomIndex = Math.floor(Math.random() * gradientArray.length);
    return gradientArray[randomIndex].split(',').map(Number);
}
var gradientT1 = parseGradientString(gradientTypes);
var gradientT2 = parseGradientString(gradientTypes);
var gradientT3 = parseGradientString(gradientTypes);

////////////////////////////////////////////////

// CREATE FOCUS IMAGE

///////////////////////////////////////////////
var postFocus = new Image();
postFocus.src = 'models/example.png';
postFocus.onload = function(){
    focusP1.drawImage(postFocus, 0, 0);
    focusP2.drawImage(postFocus, 0, 0);
    focusP3.drawImage(postFocus, 0, 0);
}

var storyFocus = new Image();
storyFocus.src = 'models/example.png';
storyFocus.onload = function () {
    focusS1.drawImage(storyFocus, 0, 400);
    focusS2.drawImage(storyFocus, 0, 400);
    focusS3.drawImage(storyFocus, 0, 400);
}

////////////////////////////////////////////////

// CREATE FOCUS IMAGE

///////////////////////////////////////////////
var genD1P1, genD2P1, genD1P2, genD2P2, genD1P3, genD2P3, details;

details = 101;
genD1P1 = Math.floor(Math.random() * details);
genD2P1 = Math.floor(Math.random() * details);
genD1P2 = Math.floor(Math.random() * details);
genD2P2 = Math.floor(Math.random() * details);
genD1P3 = Math.floor(Math.random() * details);
genD2P3 = Math.floor(Math.random() * details);




