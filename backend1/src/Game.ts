import { WebSocket } from "ws";
import { Chess } from "chess.js";
import { GAME_OVER, INIT_GAME, MOVE } from "./messages";

export class Game {
  public player1: WebSocket;
  public player2: WebSocket;
  public board: Chess;
  private startTime: Date;

  constructor(player1: WebSocket, player2: WebSocket) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Chess();
    this.startTime = new Date();
    this.player1.send(
      JSON.stringify({
        type: INIT_GAME,
        payload: {
          color: "white",
          message: "Game has started",
        },
      })
    );

    this.player2.send(
      JSON.stringify({
        type: INIT_GAME,
        payload: {
          color: "black",
          message: "Game has started",
        },
      })
    );
  }

  makeMove(
    socket: WebSocket,
    move: {
      from: string;
      to: string;
    }
  ) {
    if (socket === this.player1 || socket === this.player2) {
      // Validate the type of move using Zod
      // Validation here 1. Is this users move 2. Is the move valid

      if (this.board.move.length % 2 === 0 && socket !== this.player1) {
        return;
      }

      if (this.board.move.length % 2 === 1 && socket !== this.player2) {
        return;
      }
      try {
        // If yes, update the board, push the move
        // Check if the game is over
        // Gets handled by the chess.js library
        this.board.move(move);
      } catch (error) {
        throw new Error("Invalid Move");
        return;
      }

      if (this.board.isGameOver()) {
        // Send the updated board to both the players
        this.player1.emit(
          JSON.stringify({
            type: GAME_OVER,
            payload: {
              winner: this.board.turn() === "w" ? "black " : "white",
            },
          })
        );
        this.player2.emit(
          JSON.stringify({
            type: GAME_OVER,
            payload: {
              winner: this.board.turn() === "w" ? "black " : "white",
            },
          })
        );

        return;
      }

      if (this.board.moves.length % 2 === 0) {
        this.player2.emit(
          JSON.stringify({
            type: MOVE,
            payload: move,
          })
        );
      } else {
        this.player2.emit(
          JSON.stringify({
            type: MOVE,
            payload: move,
          })
        );
      }
    }
  }
}
