import { UI } from "./uiclass.js"
import { Level } from "./levelclass.js"
import { Piece } from "./enumpieces.js"

console.log("7")

let setupArray = [
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq",
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq",
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq",
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq",
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq",
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq",
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq",
    "bk", "bk", "wp", Piece.empty, "bk", "wn", "wr", "bq"
]

let removeArray = [
    0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0,
]

let time_see = 5000
let time_reconstruct = 30000


let ui = new UI()
let level1 = new Level(setupArray, removeArray, time_see, time_reconstruct)

ui.setlevel(level1)
level1.setUI(ui)

