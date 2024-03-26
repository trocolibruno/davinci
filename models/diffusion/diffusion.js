////////////////////////////////////////////////

// CREATE DETAILS

///////////////////////////////////////////////
details = 101;
detailsFolder = "models/diffusion/diffusion-svg/";

genD1P1 = Math.floor(Math.random() * details);
genD2P1 = Math.floor(Math.random() * details);
genD1P2 = Math.floor(Math.random() * details);
genD2P2 = Math.floor(Math.random() * details);
genD1P3 = Math.floor(Math.random() * details);
genD2P3 = Math.floor(Math.random() * details);

////////////////////////////////////////////////

// CREATE BACKGROUND IMAGE

///////////////////////////////////////////////
blendMode = "overlay";

////////////////////////////////////////////////

// GENERATIVE GRADIENTS BACKGROUNDS

///////////////////////////////////////////////
function parseGradientString(gradientString) {
    return gradientString.split(',').map(function (value) {
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
  var gradientType1 = parseGradientString(gradientTypes);
  var gradientType2 = parseGradientString(gradientTypes);
  var gradientType3 = parseGradientString(gradientTypes);


