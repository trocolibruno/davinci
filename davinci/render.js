function renderPost1() {
    var canvas1 = document.getElementById("layer5P1");
    var canvas2 = document.getElementById("layer6P1");
    var canvas3 = document.getElementById("layer7P1");
    var canvasFull = document.createElement('canvas');
    var ctx = canvasFull.getContext('2d');
    canvasFull.width = canvas1.width;
    canvasFull.height = canvas1.height;

    ctx.drawImage(canvas3, 0, 0);
    ctx.drawImage(canvas1, 0, 0);
    ctx.drawImage(canvas2, 0, 0);

    var image = canvasFull.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'DaVinci-post1.png';
    link.href = image;
    link.click();
}