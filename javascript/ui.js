
var canvasback
var ctxback //main board background

var canvasstorage
var ctxstorage //storage board background

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
    UItest()

}
function setupContext() {
    this.canvasback = document.getElementById("background");
    this.ctxback = canvasback.getContext("2d");
    this.canvasstorage = document.getElementById("storage");
    this.ctxstorage = canvasstorage.getContext("2d")

}

drawPiece = function (ctx, piece, i, j) {
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



function UItest() {
    console.log("BEGIN CONTEXT TEST")
    console.log("ctxback: ", this.ctxback)
    console.log("ctxstorage: ", this.ctxstorage)
    var b = new Board(8, 8)
    b.generateRandomPosition()
    drawBoard(b)
    var s = new StorageBoard()
    drawStorageBoard(s)
    console.log("END STORAGE TEST")

}


/*
x and y are coordinate, return array [source, i, j]
source = "board" of "storage" of "null"
*/
function getSource(x, y) {
    let board = document.getElementById("background")
    let rect = board.getBoundingClientRect();

    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        let relativeX = x - rect.left
        let relativeY = y - rect.top
        let j = Math.floor((relativeX / rect.width) * 8) //hard coded 8
        let i = Math.floor((relativeY / rect.height) * 8) //hard coded 8
        return ["board", i, j]

    }
    else {
        return ["null"]
    }
}
