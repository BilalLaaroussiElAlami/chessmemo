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
        this.arr[i * this.columns + j] = el
    }

    get(i, j) {
        if (i < 0 || i >= this.columns || j < 0 || j >= this.rows) {
            throw `OUT OF BOUNDS ERROR IN PUT i was ${i}, j was ${j}`
        }
        return this.arr[i * this.columns + j]
    }

    display() {
        let str = ` `
        for (let i = 1; i <= this.rows * this.columns; i++) {
            str += this.arr[i - 1]
            str += '\t'
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
        let pieces = ["bb", "bk", "bn", "bp", "bq", "br", "wb", "wk", "wn", "wp", "wq", "wr"];
        this.foreach(
            (i, j) => {
                let piece = pieces[Math.round(Math.random() * 11)];
                this.put(i, j, piece)


            })
    }

    foreach(fn) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                fn(i, j)
            }
        }
    }
}

const b = new Board(8, 8)
b.display()
