import { Level } from "./levelclass.js"
import { Piece } from "./enumpieces.js"

let standard_time_see = 10000
let time_reconstruct = 60000

let levels =
    [new Level(
        [
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bb",
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bp", "bk", "bp",
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bb", Piece.empty, "bp", Piece.empty,
            Piece.empty, Piece.empty, "wq", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, "wp", Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            "wp", Piece.empty, "bq", Piece.empty, "wn", Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wp", "wp", "wp",
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wr", "wk", "wp",
        ],
        [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 0, 0, 0,
            0, 0, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0
        ],
        standard_time_see,
        time_reconstruct),

    new Level(
        [
            "bk", "bq", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
        ],
        [
            1, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0
        ],
        standard_time_see,
        time_reconstruct)

    ]


export { levels }