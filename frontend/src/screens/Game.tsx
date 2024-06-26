import { useEffect, useState } from "react";
import { ChessBoard } from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";
import { Link } from "react-router-dom";

// TODO: move together, there is code repition here
export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game over";

export const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          setBoard(chess.board());
          setStarted(true);
          console.log("Game initialized");
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made");
          break;
        case GAME_OVER:
          console.log("Game over");
          break;
      }
    };
  }, [socket]);

  // if (!socket) {
  //   return <div> Connecting...</div>;
  // }

  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 w-full flex justify-center">
            <ChessBoard
              chess={chess}
              setBoard={setBoard}
              socket={socket as WebSocket}
              board={board}
            />
          </div>
          <div className="col-span-2 w-full justify-center bg-slate-300 rounded-lg">
            <div className="pt-8 px-24">
              {!started && (
                <button
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 pr-11 rounded-lg"
                  onClick={() => {
                    console.log("Button vai");
                    socket?.send(
                      JSON.stringify({
                        type: INIT_GAME,
                      })
                    );
                  }}
                >
                  Play &rarr;
                </button>
              )}
              <Link to="/">
                <button
                  className="mt-2 bg-black text-white font-bold py-3 pl-5 pr-9 rounded-lg"
                  onClick={() => {
                    socket?.send(
                      JSON.stringify({
                        type: INIT_GAME,
                      })
                    );
                  }}
                >
                  Go back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
