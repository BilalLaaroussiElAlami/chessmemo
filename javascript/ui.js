var canvas
var ctx

//draw picture chess board on background canvas
function drawbackground() {
    var image = document.getElementById("board")
    ctx.drawImage(image, 0, 0, canvas.clientWidth, canvas.clientHeight)
}
window.onload = function () {
    this.canvas = document.getElementById("background");
    this.ctx = canvas.getContext("2d");
    drawbackground()
    drawBoard(b)
}

drawPiece = function (piece, i, j) {

    let square_size = (document.getElementById("background").width) / 8
    let img = document.getElementById(piece)
    let x = j * square_size
    let y = i * square_size
    // console.log("i:", i, "j: ", j, "x: ", x, "y: ", y, "piece: ", piece)
    ctx.drawImage(img, x, y, 75, 75)

}
drawBoard = function (board) {
    board.foreach((i, j) => drawPiece(board.get(i, j), i, j))
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
