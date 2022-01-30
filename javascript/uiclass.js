import { Piece } from "./enumpieces.js"
import { boardType } from "./enumboard.js"
import { Board, StorageBoard } from "./board.js"
import { arrayEquals } from "./help.js"

class UI {
    constructor() {
        this.canvasback = null
        this.ctxback = null

        this.canvasstorage = null
        this.ctxstorage = null

        this.canvasether = null
        this.ctxether = null

        window.onload = () => { this.setup(); this.level.uiLoaded() }

        this.body = document.querySelector("body")
        this.body.onclick = this.handleClick.bind(this)

        this.level = null

        document.onmousemove = this.handleMouseMove.bind(this)

        window.onkeydown = this.handleKeyPress.bind(this)

        this.cursorX = null
        this.cursorY = null

        this.timeMillis = null
    }



    countback(time_see, time_reconstruct) {

        console.log("aaaaaa", time_reconstruct)
        this.timeMillis = time_see

        let delta = 1000
        let done_seeing = false

        let see_interval = window.setInterval(
            () => {
                this.timeMillis = this.timeMillis - delta
                document.getElementById("timer").innerHTML = Math.floor((this.timeMillis / 1000))
                if (this.timeMillis <= 0) {
                    this.timeMillis = time_reconstruct
                    done_seeing = true
                }
                if (done_seeing === true && this.timeMillis <= 0) {
                    clearInterval(see_interval)
                }
            }
            ,
            delta)




    }

    setlevel(level) {
        this.level = level
    }

    //draw picture chess board on background canvas
    drawboardbackground() {
        var image = document.getElementById("board")
        this.ctxback.drawImage(image, 0, 0, this.canvasback.clientWidth, this.canvasback.clientHeight)
    }
    //draw storageboard png on storageboard canvas
    drawStorageBackground() {
        var image = document.getElementById("storageboard")
        this.ctxstorage.drawImage(image, 0, 0, this.canvasstorage.clientWidth, this.canvasstorage.clientHeight)
    }

    setup() {
        this.setupContext()
        this.drawboardbackground()
        this.drawStorageBackground()
        //this.UItest()

    }
    setupContext() {
        this.canvasback = document.getElementById("background");
        this.ctxback = this.canvasback.getContext("2d");
        this.canvasstorage = document.getElementById("storage");
        this.ctxstorage = this.canvasstorage.getContext("2d")

        this.canvasether = document.getElementById("ether")
        this.ctxether = this.canvasether.getContext("2d")

    }

    drawPiece(ctx, piece, i, j) {
        if (piece === Piece.empty) { return }
        let square_size = this.canvasback.width / 8     //hard coded 8 --> hard coded square-size, different sizes of pieces not possible
        let img = document.getElementById(piece)
        let x = j * square_size
        let y = i * square_size
        ctx.drawImage(img, x, y, 75, 75)
    }

    drawPieceEther(piece, x, y) {
        this.ctxether.clearRect(0, 0, this.ctxether.canvas.width, this.ctxether.canvas.width) //remove for cool effect
        let img = document.getElementById(piece)
        this.ctxether.drawImage(img, (x - 37), (y - 37), 80, 80)
    }

    drawGenericBoard(board, ctx) {
        board.foreach((i, j) => this.drawPiece(ctx, board.get(i, j), i, j))
    }

    drawBoard(board) {
        this.drawGenericBoard(board, this.ctxback)
    }

    drawStorageBoard(board) {
        this.drawGenericBoard(board, this.ctxstorage)
    }

    draw(board, storageBoard) {
        this.ctxback.clearRect(0, 0, this.ctxback.canvas.width, this.ctxback.canvas.height);
        this.ctxstorage.clearRect(0, 0, this.ctxstorage.canvas.width, this.ctxstorage.canvas.height);
        this.ctxether.clearRect(0, 0, this.ctxether.canvas.width, this.ctxether.canvas.width);
        this.drawboardbackground()
        this.drawStorageBackground()
        this.drawBoard(board)
        this.drawStorageBoard(storageBoard)
    }


    // drawLevel(level) {
    //     this.draw(level.board, level.storageBoard)
    // }

    UItest() {
        console.log("BEGIN UI TEST")
        console.log("ctxback: ", this.ctxback)
        console.log("ctxstorage: ", this.ctxstorage)
        var b = new Board(8, 8)
        b.generateRandomPosition()
        this.drawBoard(b)
        var s = new StorageBoard()
        this.drawStorageBoard(s)
        console.log("END UI TEST")

    }


    /*
  x and y are coordinate, return array [source, i, j]
  source = "board" of "storage" of null
  */
    getSource(x, y) {
        let board = document.getElementById("background")
        let rect = board.getBoundingClientRect();

        let storage = document.getElementById("storage")
        let rectstorage = storage.getBoundingClientRect()

        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            let relativeX = x - rect.left
            let relativeY = y - rect.top
            let j = Math.floor((relativeX / rect.width) * 8) //hard coded 8
            let i = Math.floor((relativeY / rect.height) * 8) //hard coded 8
            return [boardType.board, i, j]

        }
        if (x >= rectstorage.left && x <= rectstorage.right && y >= rectstorage.top && y <= rectstorage.bottom) {
            let relativeX = x - rectstorage.left
            let relativeY = y - rectstorage.top
            let j = Math.floor((relativeX / rectstorage.width) * 8) //hard coded 8
            let i = Math.floor((relativeY / rectstorage.height) * 4) //hard coded 4
            return [boardType.storage, i, j]

        }
        else {
            return null
        }
    }


    handleClick(e) {
        let placeClick = this.getSource(e.clientX, e.clientY)
        if (placeClick !== null) {
            this.level.click(placeClick)
        }
    }

    handleMouseMove(e) {
        this.cursorX = e.clientX
        this.cursorY = e.clientY
        this.level.handleMouseMove(this.cursorX, this.cursorY)
    }




    /*  max_delta = 500
      lastKeyPressed = ''
      last_time = new Date()
     
      handleKeyPress(e) {
          let currentKeyPressed = e.key
          let currentTime = new Date()
     
          console.log(currentTime - this.last_time)
     
          if (currentKeyPressed === this.lastKeyPressed) {
              let delta = currentTime - this.last_time
              if (delta < this.max_delta) {
     
                  this.doubleKeyPress(currentKeyPressed)
              }
          }
          else {
              this.singleKeyPressed(currentKeyPressed)
          }
     
          this.last_time = currentTime
          this.lastKeyPressed = currentKeyPressed
      }
     
      doubleKeyPress(key) {
          console.log("double press: ", key)
      }
     
      singleKeyPressed(key) {
          console.log("single press: ", key)
      }
      */

    //legal key presses: k --> white king, K --> black king, r --> rook, R --> black rook
    possibleKeyPresses = ['p', 'r', 'b', 'n', 'q', 'k', 'P', 'R', 'B', 'N', 'Q', 'K', "e"]

    handleKeyPress(e) {
        let key = e.key
        let placeClick = this.getSource(this.cursorX, this.cursorY)
        //console.log(placeClick)
        if (this.possibleKeyPresses.includes(key)) {
            // console.log("placeclick ", placeClick)
            // console.log("placeclick !== null", placeClick !== null)
            if (placeClick !== null) {

                this.level.keyPress(key, this.getSource(this.cursorX, this.cursorY))
            }
        }
    }
}


console.log("5")



export { UI }


