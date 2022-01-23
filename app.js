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
    drawPieces(b)
}

drawPiece = function (piece, i, j) {
    let square_size = (document.getElementById("background").width) / 8
    let img = document.getElementById(piece)
    ctx.drawImage(img, i * square_size, j * square_size, 75, 75)

}
drawPieces = function (board) {
    board.foreach((i, j) => drawPiece(board.get(i, j), i, j))
}


