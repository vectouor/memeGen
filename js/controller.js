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
    gCtx.drawImage(gCurrImg, 0, 0, 500, 500);
    render()
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


/*===============================================================================*/
function onMoveLine(inc) {
    gLineY += inc;
    render();
}

/*===============================================================================*/
function render() {
    gCtx.restore();
    gCtx.drawImage(gCurrImg, 0, 0, 500, 500);
    drawText(gLineX, gLineY);
    gCtx.save();
}
/*===============================================================================*/
function onTextSizeChange(sizeInc) {

    let textSize = getTextSize();

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
    let lineIdx = getSelectedMemeLine();
    if (gCtx.measureText($('.input-text').val()).width > 450) {
        return;
    }
    setMemeText($('.input-text').val(), lineIdx);
    clearCanvas();
    render();
}
/*===============================================================================*/
// function canvasClicked(ev) {
function onSelectLine(ev) {

    let idx = getSelectedMemeLine();
    let lineSize = getMemeLineSize(idx);

    if (ev.offsetY <= gLineY && ev.offsetY >= gLineY - lineSize) {

        setSelectedMemeLine(0);
        gLineY = gMeme.lines[0].lineY;
        console.log('line1')
        render();
    }

    if (ev.offsetY <= (gCanvas.height - 10) && ev.offsetY >= gMeme.lines[1].lineY - gMeme.lines[1].size) {
        setSelectedMemeLine(1);
        gLineY = gMeme.lines[1].lineY;
        console.log('line2')
        render();
    }
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
// function onMoveLine(inc) {

//     let lineIdx = getSelectedMemeLine();

//     if (gLineY < (gMeme.lines[lineIdx].lineY)) {
//         gLineY -= 20;
//         clearCanvas();
//         render();
//         return;
//     }

//     gLineY += inc;
//     clearCanvas();
//     render();
// }
/*========================================================================================*/
// function saveAndRestoreExample() {
//     gCtx.strokeStyle = 'red'
//     gCtx.fillStyle = 'white'
//     drawText('befor save', 100, 60)
//     gCtx.save()
//     // drawText('after save', 100, 160)
//     gCtx.strokeStyle = 'black'
//     gCtx.fillStyle = 'red'
//     drawText('after save and change', 20, 260)
//     gCtx.restore()
//     drawText('after restore', 100, 360)
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