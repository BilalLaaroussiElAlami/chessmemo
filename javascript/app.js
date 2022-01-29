import { UI } from "./uiclass.js"
import { Level } from "./levelclass.js"
import { Piece } from "./enumpieces.js"

console.log("7")

let setupArray = [
    "br", "bb", "bn", "bq", "bk", "bb", "bn", "br",
    "bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp",
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
    Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
    "wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp",
    "wr", "wb", "wn", "wq", "wk", "wb", "wn", "wr",


]

let toRemovePieces = [
    1, 1, 1, 0, 1, 1, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 1, 0, 0, 0, 0,
]


let time_see = 5000
let time_reconstruct = 30000


let ui = new UI()

let level1 = new Level(setupArray, toRemovePieces)


ui.setlevel(level1)
level1.setUI(ui)

