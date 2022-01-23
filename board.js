class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.arr = []
        this.generateRandomPosition2()

    }

    //i-th row, j-th column
    put(i, j, el) {
        if (i < 0 || i >= this.columns || j < 0 || j >= this.rows) {
            throw `OUT OF BOUNDS ERROR IN PUT i was ${i}, j was ${j}`
        }
        this.arr[(i * this.columns) + j] = el
    }

    get(i, j) {
        if (i < 0 || i >= this.columns || j < 0 || j >= this.rows) {
            throw `OUT OF BOUNDS ERROR IN PUT i was ${i}, j was ${j}`
        }
        return this.arr[(i * this.columns) + j]
    }

    display() {
        let str = ` `
        for (let i = 1; i <= this.rows * this.columns; i++) {
            str += this.arr[i - 1]
            str += '  '
            if ((i % this.rows) === 0) {
                str += ' \n '
            }
        }
        console.log(str)
    }

    initialise() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            this.arr[i] = "sum"
        }
    }

    generateRandomPosition() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            let r = Math.round(Math.random() * 4)
            this.arr[i] = r
        }
    }

    generateRandomPosition2() {
        let pieces = ["bb", "bk", "bn", "bp", "bq", "br", "wb", "wk", "wn", "wp", "wq", "wr"]; //if this chanfes enumpieces must be changed as well! 
        this.foreach(
            (i, j) => {
                let piece = pieces[Math.round(Math.random() * 11)];
                this.put(i, j, piece)


            })
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

    display2() {
        let str = ``
        this.foreach((i, j) => {
            str += this.get(i, j);
            str += '  '
            if (j === this.rows - 1) { str += '\n' }
        })
        console.log(str)
    }

    foreachtest() {
        console.log("for each test")
        this.foreach((i, j) => (console.log("i: ", i, "j: ", j)))
    }


}

const b = new Board(8, 8)
b.display()
console.log("\n")
b.display2()

b.foreachtest()