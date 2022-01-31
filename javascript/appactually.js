import { Game } from "./game.js";
import { levels } from "./definelevels.js";
import { UI } from "./uiclass.js";



function main() {

    let ui = new UI()
    let game = new Game(levels, ui)
    game.setup()
    game.startGame()

}

window.onload = () => { main() }