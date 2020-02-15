'use strict'

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
}
/*========================================================================================*/
function selectImage(el) {
    gCurrImg = el;
    $('.gallery').hide();
    $('.editor').show();
    $('.editor-container').show();
    render(0);
}
/*========================================================================================*/
function drawText(textLine) {
    gCtx.lineWidth = '1';
    gCtx.strokeStyle = textLine.strokeColor;
    gCtx.fillStyle = textLine.fillColor;
    gCtx.font = `${textLine.size}px ${textLine.font}`;
    gCtx.textAlign = textLine.align;
    gLineX = textLine.lineX;
    gLineY = textLine.lineY;
    gCtx.fillText(textLine.txt, textLine.lineX, textLine.lineY);
    gCtx.strokeText(textLine.txt, textLine.lineX, textLine.lineY);
}
/*===============================================================================*/
function render(lineIdx) {
    let textLines = getMemeLines();
    gCtx.drawImage(gCurrImg, 0, 0, 500, 500);
    textLines.forEach(line => { drawText(line) });
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
//         `  <div class="controls control-box-2">
//         <h1 class="editor-title">bottom line</h1>
//         <input class="input-text" type="text" onkeyup="onMemeTextChange(this)" onfocus="selectLine(this)">
//         <button class="control-btn" onclick=" onMoveLine(-10)">↑A</button>
//         <button class="control-btn" onclick="onMoveLine(10)">↓A</button>
//         <button class="control-btn" onclick="onTextAlign('right',this)">←A</button>
//         <button class="control-btn" onclick="onTextAlign('left',this)">A→</button>
//         <button class="control-btn" onclick="onTextAlign('center',this)">center</button>
//         <button class="control-btn" onclick="onTextSizeChange(5)">A+</button>
//         <button class="control-btn" onclick="onTextSizeChange(-5)">A-</button>
//         <input class="color-picker" type="color" id="head" name="head" value="#ffffff" onchange="onChangeStrokeColor(this)">
//         <input class="color-picker" type="color" id="head" name="head" value="#ffffff" onchange="onChangeFillColor(this)">
//         <!-- <button class="control-btn" onclick=" onAddLine()">+</button> -->
//         <button class="control-btn" onclick="returnToGallery()">back</button>
//         <a class="download-link" href="#" onclick="downloadCanvas(this)" download="">Download</a>
//     </div>`;
//     var elOperators = document.querySelector('.control-boxes-section');
//     elOperators.innerHTML += strHTML;
//     lineNums.push(lineIdx);
// }
// /*========================================================================================*/
// function onRemoveLine() {
//     var elOperators = document.querySelector('.control-boxes-section');
//     elOperators.removeChild(elOperators.lastChild);
// }