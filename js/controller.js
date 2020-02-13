'use strict'

//keep track of line numbers; 
var lineNums = [];
var lineIdx = 1;
/*========================================================================================*/
function renderGallery() {

    var images = getImages();
    var strHTMLs = '';
    var strHTMLs = images.map(image => {
        return `<img class="item gallery-item" src="${image.url}" alt="" onclick="selectImage(this)">`
    });
    var elGallery = document.querySelector('.gallery');
    elGallery.innerHTML = strHTMLs.join('');
}

/*========================================================================================*/
function returnToGallery() {

    $('.gallery').show();
    $('.editor').hide();
    $('.input-text').val(' ');
    // if (confirm('quit without saving?')) {
    // }
}
/*========================================================================================*/
function drawText(x, y) {
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].strokeColor;
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].fillColor;
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Impact`;
    gCtx.textAlign = gMeme.lines[gMeme.selectedLineIdx].align;
    gCtx.fillText(gMeme.lines[gMeme.selectedLineIdx].txt, x, y);
    gCtx.strokeText(gMeme.lines[gMeme.selectedLineIdx].txt, x, y);
}

/*========================================================================================*/
//hide gallery, show editor with selected picture.
function selectImage(el) {
    gCurrImg = el;
    $('.gallery').hide();
    $('.editor').show();
    $('.editor-container').show();
    gCtx.drawImage(gCurrImg, 0, 0, 500, 500);
}
/*===============================================================================*/
function onMoveLine(change) {
    if (gLineY < (gMeme.lines[gMeme.selectedLineIdx].size + 10)) {
        gLines += 20;
        clearCanvas();
        render();
        return;
    }
    gLineY += change;
    clearCanvas();
    render();
}
/*===============================================================================*/
function render() {
    drawText(gLineX, gLineY);
    gCtx.drawImage(gCurrImg, 0, 0, 500, 500);
    drawText(gLineX, gLineY);
}
/*===============================================================================*/
function onTextSizeChange(sizeInc) {

    console.log(gCtx.measureText($('.input-text').val()).width);
    let textSize = getTextSize();
    console.log(textSize)

    if (gCtx.measureText($('.input-text').val()).width > 480) {
        console.log(sizeInc)
        textSize -= 5;
        setTextSize(textSize);
        render();
        return;
    }
    textSize += sizeInc;
    setTextSize(textSize);
    clearCanvas();
    render();
}
/*===============================================================================*/
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}
/*===============================================================================*/
function onMemeTextChange() {
    console.log(gLineX, gLineY)
    if (gCtx.measureText($('.input-text').val()).width > 450) {

        return;
    }
    setMemeText($('.input-text').val());
    clearCanvas();
    render();
}
/*===============================================================================*/
function canvasClicked(ev) {

    let idx = getSelectedMemeLine();
    console.log(idx)
    console.log(ev.offsetX, ev.offsetY)
        // if (ev.offsetY < gMeme.lines[idx].lineY) {
        //     console.log('line1')
        // }
        // if (ev.offsetY < 480 && ev.offsetY >= gMeme.lines[idx].lineY) {
        //     console.log('line2')
        // }
}
/*===============================================================================*/
function onChangeStrokeColor(el) {
    setStrokeColor(el.value);
    render();
}
/*===============================================================================*/
function onChangeFillColor(el) {
    setFillColor(el.value);
    render();
}
/*========================================================================================*/
// function onAddText(el) {
//     console.log($('.input-text').val());
//     setMemeText($('.input-text').val(), 0)
//     gMeme.lines[0].txt = $('.input-text').val();
//     console.log($(gMeme.lines[0].txt));
//     drawText(gLineX, gLineY);
// }
/*========================================================================================*/
// function onAddLine() {
//     var strHTML =
//         `<div class="controls control-box-${++lineIdx}">
//         <input class="input-text" type="text" onkeyup="onMemeChange()">
//         <button class="control-btn" onclick=" onMoveLineUp()">↑</button>
//         <button class="control-btn" onclick="onMoveLineDown()">↓</button>
//         <button class="control-btn" onclick=" onMoveLineDown() ">⇅</button>
//         <button class="control-btn" onclick=" onAddLine()">+</button>
//         <button class="control-btn" onclick="returnToGallery()">back</button>
//         <button class="control-btn" onclick="onRemoveLine()">X</button>
//     </div>`;
//     var elOperators = document.querySelector('.control-boxes-section');
//     elOperators.innerHTML += strHTML;
//     lineNums.push(lineIdx);
// }
/*========================================================================================*/
// function onRemoveLine() {
//     var elOperators = document.querySelector('.control-boxes-section');
//     elOperators.removeChild(elOperators.lastChild);
// }