

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
    constructor(setupArray, toRemovePieces, time_see, time_reconstruct) {
        this.verifyboard = new Board(8, 8)
        this.verifyboard.fill(setupArray)

        this.currentboard = new Board(8, 8)
        this.currentboard.fill(setupArray)

        this.toRemovePieces = toRemovePieces

        // this.storage = this.currentboard.removePieces(toRemovePieces) //remember removePieces on board! and returns a storageBoard
        this.storage = new StorageBoard()

        this.holdingPiece = false

        this.ui = null

        this.time_see = time_see
        this.time_reconstruct = time_reconstruct

        this.canManipulate = false

        this.win = false

        this.game = null
    }

    setGame(game) {
        this.game = game
    }

    play() {
        //removes pieces once time_see is up, since then the user is allowed to manipulate the board
        window.setTimeout(
            () => {
                this.canManipulate = true;
                this.removePieces()
            }
            , this.time_see) //na time_see milliseconden moeten de pieces weggehaald worden en kan pieces worden opgepakt/gedropt

        //calls gameover once time is up
        window.setTimeout(
            () => {
                if (this.win === false) {
                    this.failedLevel()
                }
            },
            this.time_reconstruct + this.time_see) //
        this.ui.countback(this.time_see, this.time_reconstruct)
        this.drawLevel()
    }
    removePieces() {
        console.log("called")
        this.storage = this.currentboard.removePieces(this.toRemovePieces)
        this.drawLevel()
    }


    isLevelWon() {
        let won = this.verifyboard.equals(this.currentboard)
        if (won) {
            this.wonLevel()
        }
    }

    wonLevel() {
        // alert("SIIIIIUUUUUHH")
        this.game.exitLevel("win")

    }


    failedLevel() {
        // alert("NOOOOOOO")
        this.game.exitLevel("loss")
    }


    drawLevel() {
        this.ui.draw(this.currentboard, this.storage)
    }
    setUI(ui) {
        this.ui = ui
    }


    // //Once UI is loaded the level starts
    // uiLoaded() {
    //     this.play()
    // }


    //assumes good source (cursor on valid board)
    pickup(source) {
        if (this.canManipulate === false) { return }
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
        if (this.canManipulate === false) { return }
        let destinationBoard = (destination[0] === boardType.board) ? this.currentboard : this.storage
        let id = destination[1]
        let jd = destination[2]
        if (destinationBoard.get(id, jd) === Piece.empty) {
            destinationBoard.put(id, jd, this.holdingPiece)
            this.holdingPiece = false
            this.drawLevel()
            this.isLevelWon()
        }
    }

    dropPiece(destination, piece) {
        if (this.canManipulate === false) { return }
        let destinationBoard = (destination[0] === boardType.board) ? this.currentboard : this.storage
        let id = destination[1]
        let jd = destination[2]
        destinationBoard.put(id, jd, piece)
        this.drawLevel()
        this.isLevelWon()
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

    mapKeyPiece = new Map([
        ["k", "wk"],
        ["q", "wq"],
        ["r", "wr"],
        ["b", "wb"],
        ["n", "wn"],
        ["p", "wp"],

        ["K", "bk"],
        ["Q", "bq"],
        ["R", "br"],
        ["B", "bb"],
        ["N", "bn"],
        ["P", "bp"],

        ["e", Piece.empty],
        ["E", Piece.empty]
    ]);

    keyPress(key, destination) {
        this.dropPiece(destination, this.mapKeyPiece.get(key))
    }


}

console.log("6")


export { Level }


