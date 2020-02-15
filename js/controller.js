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
//hide gallery, show editor with selected picture.
function selectImage(el) {
    gCurrImg = el;
    $('.gallery').hide();
    $('.editor').show();
    $('.editor-container').show();
    render(0);
    render(1);
}
/*========================================================================================*/
function drawText(textLine) {
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = textLine.strokeColor;
    gCtx.fillStyle = textLine.fillColor;
    gCtx.font = `${textLine.size}px Impact`;
    gCtx.textAlign = textLine.align;
    gLineX = textLine.lineX;
    gLineY = textLine.lineY;
    gCtx.fillText(textLine.txt, textLine.lineX, textLine.lineY);
    gCtx.strokeText(textLine.txt, textLine.lineX, textLine.lineY);
}
/*===============================================================================*/
function render(lineIdx) {
    gCtx.restore();
    let textLines = getMemeLines();
    gCtx.drawImage(gCurrImg, 0, 0, 500, 500);
    textLines.forEach(line => { drawText(line) });
    gCtx.save();
}

/*===============================================================================*/
function onMoveLine(inc) {
    let idx = getSelectedMemeLine();
    let memeTextHeight = getMemeLineY(idx);
    memeTextHeight += inc;
    setMemeLineY(memeTextHeight)
    render(idx);
}
/*===============================================================================*/
function onTextAlign(direction) {
    let idx = getSelectedMemeLine();
    setTextAlignment(direction)
    render(idx);
}
/*===============================================================================*/
function selectLine(el) {
    let className = $(el).parent()[0].className;
    let inputLineNumber = +className.slice(-1);
    setSelectedMemeLine((inputLineNumber - 1));
}
/*===============================================================================*/

function onTextSizeChange(sizeInc) {
    let idx = getSelectedMemeLine();
    let textSize = getTextSize(idx);

    textSize += sizeInc;
    setTextSize(textSize, idx);
    render(idx);
    gCtx.save();
}
/*===============================================================================*/
function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}
/*===============================================================================*/
function onMemeTextChange(el) {
    selectLine(el)
    let idx = getSelectedMemeLine();
    let memeText = getMemeText(idx);
    memeText = $(el).val();
    setMemeText(memeText);
    if (gCtx.measureText($('.input-text').val()).width > 450) {
        return;
    }
    render(idx);
    gCtx.save();
}
/*===============================================================================*/
function onChangeStrokeColor(el) {
    selectLine(el);
    let idx = getSelectedMemeLine();
    setStrokeColor(el.value);
    render(idx);
}
/*===============================================================================*/
function onChangeFillColor(el) {
    selectLine(el);
    let idx = getSelectedMemeLine();
    setFillColor(el.value);
    render(idx);
}
/*===============================================================================*/


// function saveCurrCanvasState() {
//     gCtx.save();
// }
/*===============================================================================*/

// function onSelectLine(ev) {

//     let idx = getSelectedMemeLine();
//     let lineSize = getTextSize(idx);
//     let text = getMemeText(idx)
//     let memeHeight = getMemeLineY();

//     $('.input-text').val(text)

//     if (ev.offsetY <= gLineY && ev.offsetY >= gLineY - lineSize) {
//         console.log(ev.offsetY, '<=', gLineY, '&&', ev.offsetY, '>=', gLineY - lineSize)
//         setSelectedMemeLine(0);
//         console.log(getSelectedMemeLine())
//         setLineY(getSelectedMemeLine())
//     }

//     if (ev.offsetY <= (gCanvas.height - 10) && ev.offsetY >= gMeme.lines[1].lineY - gMeme.lines[1].size) {
//         // console.log(ev.offsetY, '<=', (gCanvas.height - 10), '&&', ev.offsetY, '>=', gMeme.lines[1].lineY - gMeme.lines[1].size);
//         setSelectedMemeLine(1);
//         console.log(getSelectedMemeLine())
//         setLineY(getSelectedMemeLine())
//     }
// }

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