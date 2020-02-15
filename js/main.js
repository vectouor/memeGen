'use strict'

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    gLineX = gCanvas.width / 2;
    gCanvasWidth = gCanvas.width;
    let idx = getSelectedMemeLine();
    gLineY = gMeme.lines[idx].lineY;
    renderGallery();
    $('.editor').hide();
    $('.canvas-section').hide();
    $('.control-boxes-section').hide();
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}