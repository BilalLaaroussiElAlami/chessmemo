
import { Board, StorageBoard } from "./board.js";
import { drawStorageBoard, drawBoard, getSource } from "./ui.js"
import { boardType } from "./enumboard.js"
import { Piece } from "./enumpieces.js"
/*
functie pickup 
check holding === false 
zoja check of op geldige locatie word geklikt: op bioard of storage en of op de plek WEL degelijk een piece staat
zoja zet in variabele: het bron bord; het soort piece, i, en j 

functie drop
check holding !== false
zoja zoja check of op geldige locatie word geklikt: op board of storage en of op de plek GEEN  piece staat
zoja drop piece op de plek, en verwijder piece van bron 
*/


//setup board and storage
let board = new Board(8, 8)
board.generateRandomPosition()
let storage = new StorageBoard()
let holdingPiece = false

//shit
function drawLevel() {
    drawStorageBoard(storage)
    drawBoard(board)
}

//assumes good source (cursor on valid board)
function pickup(source) {
    let sourceBoard = (source[0] === boardType.board) ? board : storage
    let i = source[1]
    let j = source[2]
    if (holdingPiece === false && sourceBoard.get(i, j) !== Piece.empty) {
        console.log("picking up piece: ", sourceBoard.get(i, j))
        holdingPiece = source
    }
}
//assumes good source (cursor on valid board)
function drop(destination) {
    let destinationBoard = (destination[0] === boardType.board) ? board : storage
    let id = destination[1]
    let jd = destination[2]

    if (holdingPiece !== false && destinationBoard.get(id, jd) === Piece.empty) {
        let sourceBoard = (holdingPiece[0] === boardType.board) ? board : storage
        let is = holdingPiece[1]
        let js = holdingPiece[2]

        destinationBoard.put(id, jd, sourceBoard.get(is, js))  //put in destination
        sourceBoard.put(is, js, Piece.empty)                   //drop from source

        holdingPiece = false
        return true

    }
}

let body = document.querySelector("body")
body.onclick = function (e) {
    // console.log("x: ", e.clientX, "y: ", e.clientY)
    // console.log(getSource(e.clientX, e.clientY))

    drawLevel()
    let source = getSource(e.clientX, e.clientY)
    if (source[0] === null) {
        return
    }
    if (holdingPiece !== false) {
        drop(source)
    }
    if (holdingPiece === false) {
        pickup(source)
    }

}



//MouseMovement
function handleMouseMove(e) {
    //console.log("mouse location:", e.clientX, e.clientY)
}

document.onmousemove = handleMouseMove

