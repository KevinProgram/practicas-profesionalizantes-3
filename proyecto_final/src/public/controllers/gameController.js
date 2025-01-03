import { LoginController } from './loginController.js'
import { LobbyController } from './lobbyController.js'
import { CombatController } from './combatController.js'
import { KeyboardController } from './keyboardController.js'

/*
    El controlador responde a los eventos que producen la vista (interaccion grafica) y en el modelo.
*/

class GameController {
    constructor(view, model) {

        this.view = view;
        this.model = model;
        this.loginController = new LoginController(view.getViewMyName("login"), model);
        this.lobbyController = new LobbyController(view.getViewMyName("lobby"), model);
        this.combatController = new CombatController(view.getViewMyName("combat"), model);
        this.keyboardController = new KeyboardController(view.getViewMyName("player"), model);

        this.loginController.init();
        this.lobbyController.init();
        this.keyboardController.init();


        this.model.addEventListener("userLogged", () => {
            this.view.renderView("lobby");
        })

        this.model.addEventListener("Player ready", () => {
            this.view.renderView("combat");
        })

        this.model.player.addEventListener("moveleft", () => {
            //this.view.playerView.x -= this.view.playerView.delta_x;

            if (!this.view.checkCollision(this.view.playerView.x - this.view.playerView.delta_x, this.view.playerView.y)) {
                this.view.playerView.x -= this.view.playerView.delta_x;
            }
        });

        this.model.player.addEventListener("moveright", () => {
            // this.view.playerView.x += this.view.playerView.delta_x;

            if (!this.view.checkCollision(this.view.playerView.x + this.view.playerView.delta_x, this.view.playerView.y)) {
                this.view.playerView.x += this.view.playerView.delta_x;
            }
        });

        this.model.player.addEventListener("moveup", () => {
            // this.view.playerView.y -= this.view.playerView.delta_y;

            if (!this.view.checkCollision(this.view.playerView.x, this.view.playerView.y - this.view.playerView.delta_y)) {
                this.view.playerView.y -= this.view.playerView.delta_y;
            }
        });

        this.model.player.addEventListener("movedown", () => {
            // this.view.playerView.y += this.view.playerView.delta_y;

            if (!this.view.checkCollision(this.view.playerView.x, this.view.playerView.y + this.view.playerView.delta_y)) {
                this.view.playerView.y += this.view.playerView.delta_y;
            }
        });

        document.body.appendChild(this.view);

        // Consultar al modelo el estado inicial del jugador
        // this.playerController.askForPlayerState();

    }

    start() {

        requestAnimationFrame(() => this.view.update());  

        console.log("Im starting...")
    }

    /* stop() */
}

export { GameController };