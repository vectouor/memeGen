'use strict'

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    gLineX = gCanvas.width / 2;
    gLineY = 10 + gMeme.lines[gMeme.selectedLineIdx].size;

    renderGallery();
}