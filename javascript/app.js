import { UI } from "./uiclass.js"
import { Level } from "./levelclass.js"
import { Piece } from "./enumpieces.js"

console.log("7")

let setupArray = [
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bb",
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bp", "bk", "bp",
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bb", Piece.empty, "bp", Piece.empty,
    Piece.empty, Piece.empty, "wq", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
    Piece.empty, Piece.empty, Piece.empty, "wp", Piece.empty, Piece.empty, Piece.empty, Piece.empty,
    "wp", Piece.empty, "bq", Piece.empty, "wn", Piece.empty, Piece.empty, Piece.empty,
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wp", "wp", "wp",
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wr", "wk", "wp",



]

let toRemovePieces = setupArray.map((el => 1))


let time_see = 30000
let time_reconstruct = 300000


let ui = new UI()

let level1 = new Level(setupArray, toRemovePieces, time_see, time_reconstruct)


ui.setlevel(level1)
level1.setUI(ui)

