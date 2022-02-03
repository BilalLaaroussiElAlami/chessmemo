import { Level } from "./levelclass.js"
import { Piece } from "./enumpieces.js"


let standard_time_see = 5000
let time_reconstruct = 5000

let levels =

    [
        new Level(
            [
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bk",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wk",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                "wp", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            ],
            [
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,],
            10000,
            10000


        ),

        new Level(
            [
                Piece.empty, Piece.empty, "wk", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wq", Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, "bk", Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "br"
            ],
            [0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 1],
            30000,
            20000
        ),
        new Level(
            [
                Piece.empty, "wk", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                "wp", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bk", "bp",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wp",
                "br", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, "wr", Piece.empty, Piece.empty, Piece.empty, "bq", Piece.empty, Piece.empty
            ],
            [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0, 0, 0,

            ],
            30000,
            30000
        )
        ,

        new Level(
            [
                "bk", Piece.empty, Piece.empty, Piece.empty, "bn", Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, "wq", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, "bp", Piece.empty, "wk", Piece.empty, Piece.empty, "bb", Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty],
            [
                1, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0
            ],
            60000,
            60000
        ),

        new Level(
            [
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wk", Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "br", Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, "wp", Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bk", Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bp", Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, "wr", Piece.empty, Piece.empty, Piece.empty, Piece.empty,
            ],
            [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 1, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 1, 0, 0, 0, 0
            ],
            15000,
            10000
        ),

        new Level(
            [
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bk",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wb", Piece.empty, "bp", Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wp",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bp", Piece.empty, "wk",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bp",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wp",
                "bp", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty
            ],
            [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0
            ],
            30000,
            30000
        ),
        new Level(
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
            60000,
            60000),




    ]


export { levels }