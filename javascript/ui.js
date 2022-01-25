import { Piece } from "./enumpieces.js"
import { boardType } from "./enumboard.js"
import { Board, StorageBoard } from "./board.js"


var canvasback
var ctxback  //main board background

var canvasstorage
var ctxstorage//storage board background

//draw picture chess board on background canvas
function drawboardbackground() {
    var image = document.getElementById("board")
    ctxback.drawImage(image, 0, 0, canvasback.clientWidth, canvasback.clientHeight)
}
//draw storageboard png on storageboard canvas
function drawStorageBackground() {
    var image = document.getElementById("storageboard")
    ctxstorage.drawImage(image, 0, 0, canvasstorage.clientWidth, canvasstorage.clientHeight)
}
window.onload = function () {
    setupContext()
    drawboardbackground()
    drawStorageBackground()
    //UItest()

}
function setupContext() {
    canvasback = document.getElementById("background");
    ctxback = canvasback.getContext("2d");
    canvasstorage = document.getElementById("storage");
    ctxstorage = canvasstorage.getContext("2d")

}

function drawPiece(ctx, piece, i, j) {
    if (piece === Piece.empty) { return }
    let square_size = canvasback.width / 8     //hard coded 8 --> hard coded square-size, different sizes of peices not possible
    let img = document.getElementById(piece)
    let x = j * square_size
    let y = i * square_size
    ctx.drawImage(img, x, y, 75, 75)
}


function drawGenericBoard(board, ctx) {
    board.foreach((i, j) => drawPiece(ctx, board.get(i, j), i, j))
}

function drawBoard(board) {
    drawGenericBoard(board, ctxback)
}

function drawStorageBoard(board) {
    drawGenericBoard(board, ctxstorage)
}

function draw(board, storageBoard) {
    ctxback.clearRect(0, 0, ctxback.canvas.width, ctxback.canvas.height);
    ctxstorage.clearRect(0, 0, ctxstorage.canvas.width, ctxstorage.canvas.height);
    drawboardbackground()
    drawStorageBackground()
    drawBoard(board)
    drawStorageBoard(storageBoard)
}



function UItest() {
    console.log("BEGIN UI TEST")
    console.log("ctxback: ", ctxback)
    console.log("ctxstorage: ", ctxstorage)
    var b = new Board(8, 8)
    b.generateRandomPosition()
    drawBoard(b)
    var s = new StorageBoard()
    drawStorageBoard(s)
    console.log("END UI TEST")

}


/*
x and y are coordinate, return array [source, i, j]
source = "board" of "storage" of "null"
*/
function getSource(x, y) {
    let board = document.getElementById("background")
    let rect = board.getBoundingClientRect();

    let storage = document.getElementById("storage")
    let rectstorage = storage.getBoundingClientRect()

    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        let relativeX = x - rect.left
        let relativeY = y - rect.top
        let j = Math.floor((relativeX / rect.width) * 8) //hard coded 8
        let i = Math.floor((relativeY / rect.height) * 8) //hard coded 8
        return [boardType.board, i, j]

    }
    if (x >= rectstorage.left && x <= rectstorage.right && y >= rectstorage.top && y <= rectstorage.bottom) {
        let relativeX = x - rectstorage.left
        let relativeY = y - rectstorage.top
        let j = Math.floor((relativeX / rectstorage.width) * 8) //hard coded 8
        let i = Math.floor((relativeY / rectstorage.height) * 4) //hard coded 4
        return [boardType.storage, i, j]

    }
    else {
        return [null, -1, -1]
    }
}


export { getSource, draw }