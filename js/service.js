'use strict'


var gNumberOfLines = 0;
var gCanvas;
var gCtx;
var gLineX = 500 / 2 - 150;
var gLineY = 500 / 2 - 150;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 50,
        align: 'left',
        color: 'red'
    }]
};

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['tired'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['tired'] },
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

function getImages() {
    return gImgs;
}