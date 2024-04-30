import { useEffect } from "react";
import { ChessBoard } from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";

// TODO: move together, there is code repition here
export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game over";

export const Game = () => {
  const socket = useSocket();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          console.log("Game initialized");
          break;
        case MOVE:
          console.log("Move made");
          break;
        case GAME_OVER:
          console.log("Gae over");
          break;
      }
    };
  }, [socket]);

  if (!socket) {
    return <div> Connecting...</div>;
  }
  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 w-full">
            <ChessBoard />
          </div>
          <div className="col-span-2 w-full">
            <button
              onClick={() => {
                socket.send(
                  JSON.stringify({
                    type: INIT_GAME,
                  })
                );
              }}
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//1.23.01
