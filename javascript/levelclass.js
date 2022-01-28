

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
    constructor(setupArray, time_see, time_reconstruct) {
        this.board = new Board(8, 8)
        this.board.fill(setupArray)


        this.storage = new StorageBoard()
        this.storage.makeFullStorageBoard()


        this.time_see = time_see
        this.time_reconstruct = time_reconstruct

        this.holdingPiece = false

        this.ui = null
    }

    //exepcted toRemovePieces array of 0s and 1s
    removePieces(toRemovePieces) {


        //kinda breaking abstraction by accesing taking the arr variable
        let storage = this.board.removePieces(toRemovePieces)
        this.storage = storage


        console.log("storage after removing")
        this.storage.display()

    }

    setUI(ui) {
        this.ui = ui
    }
    //assumes good source (cursor on valid board)
    pickup(source) {
        let pickupBoard = (source[0] === boardType.board) ? this.board : this.storage
        let i = source[1]
        let j = source[2]
        if (this.holdingPiece === false && pickupBoard.get(i, j) !== Piece.empty) {
            this.holdingPiece = pickupBoard.get(i, j)
            pickupBoard.put(i, j, Piece.empty)
            this.ui.draw(this.board, this.storage)
        }
    }
    //assumes good source (cursor on valid board)
    drop(destination) {
        let destinationBoard = (destination[0] === boardType.board) ? this.board : this.storage
        let id = destination[1]
        let jd = destination[2]

        if (this.holdingPiece !== false && destinationBoard.get(id, jd) === Piece.empty) {
            destinationBoard.put(id, jd, this.holdingPiece)
            this.holdingPiece = false
            this.ui.draw(this.board, this.storage)
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


