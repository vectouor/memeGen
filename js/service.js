'use strict'

var gCanvas;
var gCtx;
var gCurrImg;

var gCanvasWidth;
/* current text line indicators*/
var gLineX;
var gLineY;

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'first line',
            size: 50,
            align: 'center',
            font: 'impact',
            fillColor: 'white',
            stokeColor: 'black',
            lineX: 250,
            lineY: 70,
        },
        {
            txt: 'second line',
            size: 50,
            align: 'center',
            font: 'impact',
            fillColor: 'white',
            stokeColor: 'black',
            lineX: 250,
            lineY: 480,
        }
    ],
};

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['toy story'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['dogs'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['dogs', 'babys'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['tired', 'cat'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['baby'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['tired'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['baby'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['tired'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['tired'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['obama'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['tired'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['tired'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['tired'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['matrix'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['lotr'] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: ['star trek'] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: ['putin'] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: ['trump'] },
];

/*========================================================================================*/
/* getters & setters */

function getMemeLines() { return gMeme.lines }

function getImages() { return gImgs; }

function getMeme() { return gMeme; }

function setSelectedMemeLine(idx) {
    gMeme.selectedLineIdx = idx;
}

function getSelectedMemeLine() {
    return gMeme.selectedLineIdx;
}

function setMemeLineX(lineChnage) {
    gMeme.lines[gMeme.selectedLineIdx].lineX = lineChnage;
}

function getMemeLineX() {
    return gMeme.lines[gMeme.selectedLineIdx].lineX;
}

function setMemeLineY(lineChnage) {
    gMeme.lines[gMeme.selectedLineIdx].lineY = lineChnage;
}

function getMemeLineY() {
    return gMeme.lines[gMeme.selectedLineIdx].lineY;
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
}

function getStrokeColor() {
    return gMeme.lines[gMeme.selectedLineIdx].strokeColor;
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color;
}

function getFillColor() {
    return gMeme.lines[gMeme.selectedLineIdx].fillColor;
}

function setTextSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size = size;
}

function getTextSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size;
}

function setMemeText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function getMemeText() {
    return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function setTextAlignment(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction;
}

function getTextAlignment() {
    return gMeme.lines[gMeme.selectedLineIdx].align;
}

function setLineY(val) {
    gLineY = val;
}

function getLineY() { return gLineY; }

function setLineX(val) { gLinex = val; }

function getLineX() { return gLineX; }

// function addLine(){}

/*========================================================================================*/