'use strict'
//keep track of line numbers; 
var lineNums = [];
var lineIdx = 1;

function renderGallery() {

    var images = getImages();
    var strHTMLs = '';
    var strHTMLs = images.map(image => {
        return `<img class="item gallery-item" src="${image.url}" alt="" onclick="editImage(this)">`
    });
    var elGallery = document.querySelector('.gallery');
    elGallery.innerHTML = strHTMLs.join('');
}

function onAddLine() {
    var strHTML =
        `<div class="controls control-box-${++lineIdx}">
    <input class="input-text" type="text">
    <button onclick="onAddText(event)">add text</button>
    <button onclick="onAddLine()">add line</button>
    <button onclick="returnToGallery()">go back</button>
    <button onclick="onRemoveLine()">X</button>
    </div>`;
    var elOperators = document.querySelector('.control-boxes-section');
    elOperators.innerHTML += strHTML;
    lineNums.push(lineIdx);
}

function onRemoveLine() {
    var elOperators = document.querySelector('.control-boxes-section');
    elOperators.removeChild(elOperators.lastChild);
}

function returnToGallery() {

    $('.gallery').show();
    $('.editor').hide();
    $('.input-text2').val(' ');
    $('.input-text1').val(' ');
    // if (confirm('quit without saving?')) {
    // }
}

function drawText(x, y) {
    gCtx.lineWidth = '1'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gMeme.lines[0].size}px Impact`
    gCtx.textAlign = gMeme.lines[0].align
    gCtx.fillText(gMeme.lines[0].txt, x, y)
    gCtx.strokeText(gMeme.lines[0].txt, x, y)
}

function onAddText(el) {
    // document.querySelector('')

    console.log($('.input-text').val());
    gMeme.lines[0].txt = $('.input-text').val();
    console.log($(gMeme.lines[0].txt));
    drawText(gLineX, gLineY);
}

//hide gallery, show editor with selected picture.
function editImage(el) {
    $('.gallery').hide();
    $('.editor').show();
    $('.editor-container').show();
    gCtx.drawImage(el, 0, 0, 500, 500);
}

function onMoveLineUp() {
    // console.log('up')
}

function onMoveLineDown() {
    // console.log('down')
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function onMemeChange() {
    gMeme.lines[0].txt = $('.input-text').val();
    clearCanvas();
    drawText(gLineX, gLineY);
}

// function saveAndRestore() {
//     gCtx.strokeStyle = 'red'
//     gCtx.fillStyle = 'white'
//     drawText('befor save', 100, 60)
//     gCtx.save()
//         // drawText('after save', 100, 160)
//     gCtx.strokeStyle = 'black'
//     gCtx.fillStyle = 'red'
//     drawText('after save and change', 20, 260)
//     gCtx.restore()
//     drawText('after restore', 100, 360)
// }