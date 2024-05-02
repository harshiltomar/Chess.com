"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const chess_js_1 = require("chess.js");
const messages_1 = require("./messages");
class Game {
    constructor(player1, player2) {
        this.moveCount = 0;
        this.player1 = player1;
        this.player2 = player2;
        this.board = new chess_js_1.Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type: messages_1.INIT_GAME,
            payload: {
                color: "white",
                message: "Game has started",
            },
        }));
        this.player2.send(JSON.stringify({
            type: messages_1.INIT_GAME,
            payload: {
                color: "black",
                message: "Game has started",
            },
        }));
    }
    makeMove(socket, move) {
        if (socket === this.player1 || socket === this.player2) {
            // Validate the type of move using Zod
            // Validation here 1. Is this users move 2. Is the move valid
            if (this.moveCount % 2 === 0 && socket !== this.player1) {
                return;
            }
            if (this.moveCount % 2 === 1 && socket !== this.player2) {
                return;
            }
            console.log("Did not early return");
            try {
                // If yes, update the board, push the move
                // Check if the game is over
                // Gets handled by the chess.js library
                this.board.move(move);
            }
            catch (error) {
                console.log("error", error);
                return;
            }
            console.log("Move succeeded");
            if (this.board.isGameOver()) {
                // Send the updated board to both the players
                this.player1.send(JSON.stringify({
                    type: messages_1.GAME_OVER,
                    payload: {
                        winner: this.board.turn() === "w" ? "black " : "white",
                    },
                }));
                this.player2.send(JSON.stringify({
                    type: messages_1.GAME_OVER,
                    payload: {
                        winner: this.board.turn() === "w" ? "black " : "white",
                    },
                }));
                return;
            }
            if (this.board.moves.length % 2 === 0) {
                this.player2.emit(JSON.stringify({
                    type: messages_1.MOVE,
                    payload: move,
                }));
            }
            else {
                this.player2.emit(JSON.stringify({
                    type: messages_1.MOVE,
                    payload: move,
                }));
            }
            this.moveCount++;
        }
    }
}
exports.Game = Game;
