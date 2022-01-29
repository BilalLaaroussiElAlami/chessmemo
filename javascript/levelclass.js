

import { Board, StorageBoard } from "./board.js";

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

/*Hoe level:
ge krijgt  een bord, word getoond voor x seconden, dan worden een aantal (mogelijks alle) pieces weggehaald, dan heeft gebruiker y seconden 
tijd om het bord te reconstrueren.

Level word gedefinieerd door: 
bord 
weg te nemen pieces
aantal seconden bord te zien
aantal seconden om bord te reconstrueren
*/

class Level {
    constructor(setupArray, toRemovePieces) {
        this.verifyboard = new Board(8, 8)
        this.verifyboard.fill(setupArray)

        this.currentboard = new Board(8, 8)
        this.currentboard.fill(setupArray)

        this.storage = this.currentboard.removePieces(toRemovePieces)

        this.holdingPiece = false

        this.ui = null
    }


    islevelFinished() {
        let done = this.verifyboard.equals(this.currentboard)
        if (done) {
            alert("DONE")
            return done
        }
    }


    drawLevel() {
        this.ui.draw(this.currentboard, this.storage)
    }
    setUI(ui) {
        this.ui = ui
    }

    uiLoaded() {
        this.drawLevel()
    }

    //assumes good source (cursor on valid board)
    pickup(source) {
        let pickupBoard = (source[0] === boardType.board) ? this.currentboard : this.storage
        let i = source[1]
        let j = source[2]
        if (pickupBoard.get(i, j) !== Piece.empty) {
            this.holdingPiece = pickupBoard.get(i, j)
            pickupBoard.put(i, j, Piece.empty)
            this.drawLevel()
        }
    }
    //assumes good source (cursor on valid board)
    drop(destination) {
        let destinationBoard = (destination[0] === boardType.board) ? this.currentboard : this.storage
        let id = destination[1]
        let jd = destination[2]
        if (destinationBoard.get(id, jd) === Piece.empty) {
            destinationBoard.put(id, jd, this.holdingPiece)
            this.holdingPiece = false
            this.drawLevel()
            this.islevelFinished()
        }
    }


    click(placeClick) {
        if (this.holdingPiece !== false) { //er word geklikt en er is al een piece vastgehouden        
            this.drop(placeClick)
        }
        else if (this.holdingPiece === false) { //er word geklikt en we houden geen piece vast
            this.pickup(placeClick)
        }
    }


    //MouseMovement
    handleMouseMove(x, y) {
        if (this.holdingPiece !== false) {
            this.ui.drawPieceEther(this.holdingPiece, x, y)
        }
    }

}

console.log("6")


export { Level }


