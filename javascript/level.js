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

//setup board and storage
let board = new Board(8, 8)
let storage = new StorageBoard()
let body = document.querySelector("body")

body.onclick = function (e) {
    console.log("x: ", e.clientX, "y: ", e.clientY)


    console.log(getSource(e.clientX, e.clientY))

}



handleMouseMove = function (e) { console.log("mouse location:", e.clientX, e.clientY) }

document.onmousemove = handleMouseMove

