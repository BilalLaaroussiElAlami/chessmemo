import { Piece } from "./enumpieces.js"
import { crunch, arrayEquals } from "./help.js"
class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.arr = Array.apply(null, Array(rows * columns));


    }

    //i-th row, j-th column
    put(i, j, el) {
        if (i < 0 || i >= this.rows || j < 0 || j >= this.columns) {
            throw `OUT OF BOUNDS ERROR IN PUT i was ${i}, j was ${j}`
        }
        this.arr[(i * this.columns) + j] = el
    }

    get(i, j) {
        if (i < 0 || i >= this.rows || j < 0 || j >= this.columns) {
            throw `OUT OF BOUNDS ERROR IN GET i was ${i}, j was ${j}`
        }
        return this.arr[(i * this.columns) + j]
    }

    initialise() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            this.arr[i] = "sum"
        }
    }

    generateRandomPosition() {
        let pieces = ["bb", "bk", "bn", "bp", "bq", "br", "wb", "wk", "wn", "wp", "wq", "wr", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty]; //if this changes enumpieces must be changed as well! 
        this.foreach(
            (i, j) => {
                let piece = pieces[Math.round(Math.random() * (pieces.length - 1))];
                this.put(i, j, piece)


            })
    }

    //makes sure input array is same as array
    fill(input_arr) {
        if (input_arr.length !== this.arr.length) {
            throw "DIMENSIONS NOT THE SAME ERROR"
        }
        //also need to check every element is valid piece
        else {
            this.arr = input_arr
        }

    }


    //fn is a function with arguments i and j, it will apply fn(i,j) for all i,j
    //will travers row per row
    // -> -> -> 
    // -> -> -> 
    // -> -> ->
    foreach(fn) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                fn(i, j)
            }
        }
    }

    display() {
        let str = ``
        this.foreach((i, j) => {
            str += this.get(i, j);
            str += '  '
            if (j === this.columns - 1) { str += '\n' }
        })
        console.log(str)
    }

    foreachtest() {
        console.log("for each test")
        this.foreach((i, j) => (console.log("i: ", i, "j: ", j)))
    }

    //exepcted: toRemovePieces array of 0s and 1s, 1 means that at that index in board that piece must be removed
    //does manipulate board to remove the pieces
    //returns a storageboard of pieces that where removed
    removePieces(toRemovePieces) {
        console.log("to remove pieces")
        console.log(toRemovePieces)
        let removedPieces =
            this.arr.filter(
                (el, i) => {
                    return (toRemovePieces[i] === 1)
                })
        console.log("removed pieces")
        console.log(removedPieces)
        this.arr = this.arr.map(
            (e, i) => {
                return (toRemovePieces[i] === 1) ? Piece.empty : e
            })



        let storage = new StorageBoard()
        storage.fillFromBiggerOrSmallerArray(removedPieces)
        return storage
    }


    equals(otherBoard) {
        return arrayEquals(this.arr, otherBoard.arr)
    }

}

class StorageBoard extends Board {
    constructor() {
        super(4, 8);
        this.rows = 4
        this.columns = 8
        this.makeEmptyStorageBoard()
    }

    makeEmptyStorageBoard() {
        this.fill(Array(this.rows * this.columns).fill(Piece.empty))
    }

    makeFullStorageBoard() {
        this.fill(
            [
                "br", "bn", "bb", "bq", "bk", "bb", "bn", "br",
                "bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp",
                "wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp",
                "wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"
            ]
        )
    }

    //could be that array is bigger or smaller than  the dimensions (extra empty pieces), first we filter
    fillFromBiggerOrSmallerArray(input_arr) {
        let filteredArray = crunch(input_arr, (piece) => piece !== Piece.empty, this.rows * this.columns, Piece.empty)
        this.fill(filteredArray)
    }


}

// let s = new StorageBoard()
// s.fillFromBiggerOrSmallerArray([
//     "bn",
//     Piece.empty, "bn", "bb", "bq", "bk", "bb", "bn", "br",
//     "bp", "bp", "bp", Piece.empty, "bp", "bp", "bp", "bp",
//     "wp", "wp", Piece.empty, "wp", "wp", "wp", "wp", "wp",
//     "wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"
// ])
// s.display()



console.log("4")

export { Board, StorageBoard }


