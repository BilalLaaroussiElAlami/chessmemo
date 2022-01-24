/*
functie onclick en onrelease,
onclick: 
check  of op geldige locatie word geklikt, op board of op stored pieces canvas
zoja check of op de plek een piece staat
zoja dan in nieuwe staat holding-piece. houd ergens bij, welke piece vastgehouden werd, uit welk coordinaat, en uit welke platform.

onrelease: 
check of  staat holding-piece is 
zoja, check dat op cursor positie een lege plek is (board of opslag)
zoja: 1) doe de piece weg uit zijn originele bord, 2) zet de piece op de destination bord 3) informeer ui om terug te tekenen 
doe staat holdin-piece in elk geval uit.
*/

let body = document.querySelector("body")
body.onclick = function (e) {
    console.log("x: ", e.clientX, "y: ", e.clientY)


    console.log(getSource(e.clientX, e.clientY))


}



function update(progress) {
    // Update the state of the world for the elapsed time since last render
}

function draw() {
    // Draw the state of the world
}

function loop(timestamp) {
    var progress = timestamp - lastRender

    update(progress)
    draw()

    lastRender = timestamp
    window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)