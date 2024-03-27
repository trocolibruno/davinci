////////////////////////////////////////////////

// CREATE CONTEXT 2D - POSTS

///////////////////////////////////////////////
var contextVariables = [];

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 7; j++) {
        var layer = window[`layer${j}P${i}`];
        contextVariables.push(layer.getContext('2d'));
    }
}

var [logoP1, fxP1, textP1, focusP1, detail1P1, detail2P1, backgroundP1,
    logoP2, fxP2, textP2, focusP2, detail1P2, detail2P2, backgroundP2,
    logoP3, fxP3, textP3, focusP3, detail1P3, detail2P3, backgroundP3] = contextVariables;

////////////////////////////////////////////////

// CREATE POST LAYERS

///////////////////////////////////////////////
var postCanvasX = 1080;
var postCanvasY = 1080;

function setLayerDimensions(layers, width, height) {
    layers.forEach(layer => {
        layer.width = width;
        layer.height = height;
    });
}

var layersP1 = [layer1P1, layer2P1, layer3P1, layer4P1, layer5P1, layer6P1, layer7P1];
var layersP2 = [layer1P2, layer2P2, layer3P2, layer4P2, layer5P2, layer6P2, layer7P2];
var layersP3 = [layer1P3, layer2P3, layer3P3, layer4P3, layer5P3, layer6P3, layer7P3];

setLayerDimensions(layersP1, postCanvasX, postCanvasY);
setLayerDimensions(layersP2, postCanvasX, postCanvasY);
setLayerDimensions(layersP3, postCanvasX, postCanvasY);

////////////////////////////////////////////////

// CREATE CONTEXT 2D - STORIES

///////////////////////////////////////////////
var contextVariables = [];

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 7; j++) {
        var layer = window[`layer${j}S${i}`];
        contextVariables.push(layer.getContext('2d'));
    }
}

var [logoS1, fxS1, textS1, focusS1, detail1S1, detail2S1, backgroundS1,
    logoS2, fxS2, textS2, focusS2, detail1S2, detail2S2, backgroundS2,
    logoS3, fxS3, textS3, focusS3, detail1S3, detail2S3, backgroundS3] = contextVariables;

////////////////////////////////////////////////

// CREATE STORY LAYERS

///////////////////////////////////////////////
function setLayerDimensions(layers, width, height) {
    layers.forEach(layer => {
        layer.width = width;
        layer.height = height;
    });
}

var storyCanvasX = 1080;
var storyCanvasY = 1920;

var layersS1 = [layer1S1, layer2S1, layer3S1, layer4S1, layer5S1, layer6S1, layer7S1];
var layersS2 = [layer1S2, layer2S2, layer3S2, layer4S2, layer5S2, layer6S2, layer7S2];
var layersS3 = [layer1S3, layer2S3, layer3S3, layer4S3, layer5S3, layer6S3, layer7S3];

setLayerDimensions(layersS1, storyCanvasX, storyCanvasY);
setLayerDimensions(layersS2, storyCanvasX, storyCanvasY);
setLayerDimensions(layersS3, storyCanvasX, storyCanvasY);