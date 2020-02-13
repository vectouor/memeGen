'use strict'

var gCurrSelectedLine = 0;
var gMaxLineWidth = 480;
var gCanvas;
var gCtx;
var gCurrImg;
var gLineX;
var gLineY;
var gLines = [];
var gLines = _createLines();
var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'memeGen line 1',
            size: 50,
            align: 'center',
            fillColor: 'white',
            stokeColor: 'black',
            lineX: gLines[0].lineX,
            lineY: gLines[0].lineY,
        },
        {
            txt: 'memeGen line 2',
            size: 35,
            align: 'center',
            fillColor: 'green',
            stokeColor: 'black',
            lineX: gLines[1].gLineX,
            lineY: gLines[1].gLineY,
        }
    ]
};

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['toy story'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['dogs'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['tired'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['tired'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['tired'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['tired'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['tired'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['tired'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['tired'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['tired'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['tired'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['tired'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['tired'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['tired'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['tired'] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: ['tired'] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: ['tired'] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: ['tired'] },
];

function _createLine(lineCoords) {
    return {
        lineX: lineCoords.lineX,
        lineY: lineCoords.lineY
    }
}

function _createLines() {
    // var lines = loadFromStorage(KEY);
    // if (lines) return lines;

    var lines = [{
        lineX: 250,
        lineY: 60,
    }, {
        lineX: 250,
        lineY: 480,
    }].map(_createLine);
    return lines;
}

/*========================================================================================*/
/* getters & setters */
function getImages() { return gImgs; }

function getMeme() { return gMeme; }

function getMemeLineSize() { return gMeme.line[gMeme.selectedLineIdx].size }

function getSelectedMemeLine() { return gMeme.selectedLineIdx; }

function setSelectedMemeLine(idx) { gMeme.selectedLineIdx = idx; }

function setStrokeColor(color, lineIdx = 0) { gMeme.lines[lineIdx].strokeColor = color; }

function getStrokeColor(lineIdx = 0) { return gMeme.lines[lineIdx].strokeColor; }

function setFillColor(color, lineIdx = 0) { gMeme.lines[lineIdx].fillColor = color; }

function getFillColor(lineIdx = 0) { return gMeme.lines[lineIdx].fillColor; }

function setTextSize(size, lineIdx = 0) { gMeme.lines[lineIdx].size = size; }

function getTextSize(lineIdx = 0) { return gMeme.lines[lineIdx].size; }

function setMemeText(text, lineIdx = 0) { gMeme.lines[lineIdx].txt = text; }

function getMemeText(lineIdx = 0) { return gMeme.lines[lineIdx].text; }

function setLineY(val) { gLineY = val; }

function getLineY() { return gLineY; }

function setLineX(val) { gLinex = val; }

function getLineX() { return gLineX; }

// function addLine(){}

function getLines() {
    return gLines;
}

/*========================================================================================*/