// config
var blendMode = "overlay";

// gens
genPD(1, 5, 'P1', genD1P1, 289, -480, genColor[0], "1");
genPD(1, 6, 'P1', genD2P1, -289, 400, genColor[1], "1");
genPD(2, 5, 'P2', genD1P2, 289, -480, genColor[2], "1");
genPD(2, 6, 'P2', genD2P2, -289, 400, genColor[3], "1");
genPD(3, 5, 'P3', genD1P3, 289, -480, genColor[4], "1");
genPD(3, 6, 'P3', genD2P3, -289, 400, genColor[5], "1");

genSD(1, 5, 'S1', genD1P1, 289, -480, genColor[0], "1");
genSD(1, 6, 'S1', genD2P1, -289, 400, genColor[1], "1");
genSD(2, 5, 'S2', genD1P2, 289, -480, genColor[2], "1");
genSD(2, 6, 'S2', genD2P2, -289, 400, genColor[3], "1");
genSD(3, 5, 'S3', genD1P3, 289, -480, genColor[4], "1");
genSD(3, 6, 'S3', genD2P3, -289, 400, genColor[5], "1");

// generative model
function genPD(id, layer, postNumber, dNum, posX, posY, dColor, dAlpha) {
		var artboardLayer = "layer" + layer + postNumber;
		var d = new Image();

		d.src = "models/diffusion/diffusion-svg/" + dNum + ".svg";
		d.onload = function () {
			var canvas = document.getElementById(artboardLayer);
			var genD = canvas.getContext('2d');
			genD.drawImage(d, posX, posY);
			genD.globalAlpha = dAlpha;

			var redrawVector = canvas.getContext('2d');
			redrawVector.fillStyle = dColor;
			redrawVector.globalCompositeOperation = 'source-in';
			redrawVector.fillRect(0, 0, canvas.width, canvas.height);
	}
}

function genPB(image, prompt, id, layerType) {
		var image = new Image()
		image.src = "https://source.unsplash.com/random/1080x1920?" + prompt + "?v=" + id;
		image.onload = function () {
			layerType.globalCompositeOperation = blendMode;
			layerType.globalAlpha = 1;
			layerType.drawImage(image, 0, 0);
			layerType.globalCompositeOperation = 'destination-over';
	}
}

function genPG(gradient, layerType, gradientType, gColorA, gColorB) {
		var gradient = layerType.createLinearGradient.apply(layerType, gradientType);
		gradient.addgenColortop(0, gColorA);
		gradient.addgenColortop(1, gColorB);
		layerType.fillStyle = gradient;
		layerType.fillRect(0, 0, postCanvasX, postCanvasY);
}

function genSD(id, layer, pNum, dNum, posX, posY, dColor, dAlpha) {
		var artboardLayer = "layer" + layer + pNum;
		var d = new Image();

		d.src = "models/diffusion/diffusion-svg/" + dNum + ".svg";
		d.onload = function () {
			var canvas = document.getElementById(artboardLayer);
			var genD = canvas.getContext('2d');
			genD.drawImage(d, posX, posY);
			genD.globalAlpha = dAlpha;

			var redrawVector = canvas.getContext('2d');
			redrawVector.fillStyle = dColor;
			redrawVector.globalCompositeOperation = 'source-in';
			redrawVector.fillRect(0, 0, canvas.width, canvas.height);
	}
}