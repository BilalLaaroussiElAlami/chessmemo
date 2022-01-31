
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
            alert("you won this level")
        }
        else if (status === "loss") {
            this.losses++
            alert("you lost this level")
        }

        console.log("this.currentLevelIndex", this.currentLevelIndex)
        console.log("this.levels.length", this.levels.length)
        if (this.currentLevelIndex === this.levels.length - 1) {
            this.exitgame()
            return
        }
        else {
            this.currentLevelIndex++
            this.currentLevel = this.levels[this.currentLevelIndex]
            this.betweenlevels()
            this.startCurrentLevel()
        }

    }

    betweenlevels() {
        // alert("done level, about to start next")
    }

    exitgame() {
        alert("Thank you for playing my game! \n Any feedback would be greatly appreciated. \n Refresh te site to restart the game")
    }

}

export { Game }