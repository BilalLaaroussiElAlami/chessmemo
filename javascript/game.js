
class Game {
    //assumes at least one level
    constructor(levels, ui) {
        this.levels = levels
        this.ui = ui
        this.currentLevelIndex = 0
        this.currentLevel = levels[0]
        this.wins = 0
        this.losses = 0
    }

    setup() {
        this.levels.forEach(lvl => {
            lvl.setGame(this)
        });
    }

    startGame() {
        this.startCurrentLevel()
    }
    startCurrentLevel() {
        this.ui.setlevel(this.currentLevel)
        this.currentLevel.setUI(this.ui)
        this.currentLevel.play()
    }

    exitLevel(status) {
        if (status === "win") {
            this.wins++
        }
        else if (status === "loss") {
            this.losses++
        }

        this.currentLevelIndex++
        if (this.currentLevelIndex === this.levels.length) {
            exitgame()
            return
        }
        else {
            this.currentLevel = this.levels[this.currentLevelIndex]
            this.betweenlevels()
            this.startCurrentLevel()
        }

    }

    betweenlevels() {
        // alert("done level, about to start next")
    }

    exitgame() {
        // alert("done game")
    }

}

export { Game }