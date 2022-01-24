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
    let x = j * square_size
    let y = i * square_size
    console.log("i:", i, "j: ", j, "x: ", x, "y: ", y, "piece: ", piece)
    ctx.drawImage(img, x, y, 75, 75)

}
drawPieces = function (board) {
    board.foreach((i, j) => drawPiece(board.get(i, j), i, j))
}


