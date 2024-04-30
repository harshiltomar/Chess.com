import { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";

export const ChessBoard = ({
  board,
  socket,
}: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
}) => {
  const [from, setFrom] = useState<Square | null>(null);
  const [to, setTo] = useState<Square | null>(null);

  // Chess board
  return (
    <div className="text-white-200">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((sqaure, j) => {
              return (
                <div
                  onClick={() => {
                    if (!from) {
                      setFrom(sqaure?.square ?? null);
                    } else {
                      setTo(sqaure?.square ?? null);
                      socket.send(
                        JSON.stringify({
                          type: "move",
                          payload: {
                            from,
                            to,
                          },
                        })
                      );
                    }
                  }}
                  key={j}
                  className={`w-20 h-20 ${
                    (i + j) % 2 === 0 ? "bg-blue-500" : "bg-blue-100"
                  }`}
                >
                  <div className="w-full flex justify-center h-full">
                    <div className="h-full flex flex-col justify-center">
                      {sqaure ? sqaure.type : ""}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
