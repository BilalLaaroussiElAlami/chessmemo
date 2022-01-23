var canvas
var ctx
function drawbackground() {
    var image = document.getElementById("board")
    ctx.drawImage(image, 0, 0, canvas.clientWidth, canvas.clientHeight)
}
window.onload = function () {
    this.canvas = document.getElementById("background");
    this.ctx = canvas.getContext("2d");
    drawbackground()
}
