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

        new Level(
            [
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bk", Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bb", Piece.empty, Piece.empty,
                "bp", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, "bp", Piece.empty,
                "wp", "bp", Piece.empty, Piece.empty, Piece.empty, "bp", "wp", "bp",
                Piece.empty, "wp", Piece.empty, Piece.empty, Piece.empty, "wp", Piece.empty, "wp",
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, Piece.empty, Piece.empty, "wb", Piece.empty, Piece.empty, Piece.empty,
                Piece.empty, Piece.empty, "wk", Piece.empty, Piece.empty, Piece.empty, Piece.empty, Piece.empty
            ],
            [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                1, 1, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0

            ],
            15000,
            30000
        )

        // new Level(
        //     [
        //         "em", "em", "bk", "em", "em", "em", "em", "br",
        //         "bp", "bp", "bp", "br", "em", "bp", "wq", "bp",
        //         "em", "em", "em", "em", "em", "bp", "em", "bn",
        //         "em", "em", "bp", "em", "em", "em", "em", "em",
        //         "em", "em", "em", "em", "wp", "wr", "em", "em",
        //         "wp", "em", "em", "em", "em", "em", "em", "em",
        //         "em", "em", "wp", "wp", "em", "em", "wp", "wp",
        //         "wr", "wn", "em", "em", "em", "em", "wk", "em"
        //     ],
        //     [
        //         0, 0, 0, 0, 0, 0, 0, 1,
        //         0, 0, 0, 1, 0, 1, 1, 1,
        //         0, 0, 0, 0, 0, 1, 0, 1,
        //         0, 0, 0, 0, 0, 0, 0, 0,
        //         0, 0, 0, 0, 0, 1, 0, 0,
        //         0, 0, 0, 0, 0, 0, 0, 0,
        //         0, 0, 0, 0, 0, 0, 0, 0,
        //         0, 0, 0, 0, 0, 0, 0, 0
        //     ],
        //     20000,
        //     30000

        // )

        ,
        new Level(
            [
                "em", "wk", "em", "em", "wr", "em", "em", "em",
                "em", "em", "wp", "em", "em", "em", "em", "em",
                "em", "wn", "em", "em", "wq", "em", "wp", "em",
                "em", "em", "em", "em", "em", "bp", "em", "wp",
                "wp", "wp", "em", "wp", "em", "em", "bp", "bp",
                "em", "bp", "wn", "bp", "em", "em", "em", "em",
                "bp", "bk", "em", "em", "em", "em", "bb", "em",
                "em", "em", "bq", "bn", "em", "br", "em", "em"
            ],
            [
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0,
                0, 0, 0, 0, 1, 0, 0, 0,
                0, 0, 0, 0, 0, 1, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 1, 0,
                0, 0, 1, 0, 0, 0, 0, 0
            ],

            45000,
            60000
        )





    ]


export { levels }