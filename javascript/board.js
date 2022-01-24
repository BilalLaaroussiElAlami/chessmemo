
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
        let pieces = ["bb", "bk", "bn", "bp", "bq", "br", "wb", "wk", "wn", "wp", "wq", "wr"]; //if this changes enumpieces must be changed as well! 
        this.foreach(
            (i, j) => {
                let piece = pieces[Math.round(Math.random() * 11)];
                this.put(i, j, piece)


            })
    }

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


}

class StorageBoard extends Board {


    constructor() {
        super(4, 8);
        this.makeStorageBoard()
    }

    //maybe subclassing?
    makeStorageBoard() {
        this.fill(
            [
                "br", "bn", "bb", "bq", "bk", "bb", "bn", "br",
                "bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp",
                "wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp",
                "wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"
            ]
        )
    }
}



