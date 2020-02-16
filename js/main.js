'use strict'

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    gLineX = gCanvas.width / 2;
    gCanvasWidth = gCanvas.width;
    gCanvasHeight = gCanvas.height;
    let idx = getSelectedMemeLine();
    gLineY = gMeme.lines[idx].lineY;
    renderGallery();
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}