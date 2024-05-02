import { Link } from "react-router-dom";

// TODO: build a what is your skill level alert dialog with New, Beginer, Intermediate, Advanced
export const Landing = () => {
  return (
    <div className="flex flex-col mx-28 justify-center mt-20">
      {/* Secrion 1 */}
      <div className="mx-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              className="max-w-96 rounded-lg pt-4 "
              //src="https://imgs.search.brave.com/6FE92DTCc-Va0g1IAf0FsrF9JsGF0G7lGEFvTKBzKPY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODI5MjUyNTA0NjIt/ZDAxMmEyMmVmNzI3/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRsOGZH/Tm9aWE56ZkdWdWZE/QjhmREI4Zkh3dw.jpeg"
              src="https://ideogram.ai/api/images/direct/Il80djx6SJG6v8q2USutMw.png"
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-4xl my-2">
              Play <span className="font-bold text-blue-500">CHESS</span> on the
              #1 Site!
            </h1>
            <p className="text-2xl my-4 text-left font-thin">
              Play chess with your friends Tournaments, 10 min matches and
              Puzzles
            </p>
            <div className="flex font-thin text-indigo-500">
              <p className="mx-2">14,433,528 Games Today</p>
              <p className="ml-4">105,612 playing now</p>
            </div>
            <Link to="/new">
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 pr-11 rounded-lg">
                Play Online &rarr;
              </button>
            </Link>
            <button className="mt-2 bg-black text-white font-bold py-3 px-5 rounded-lg">
              Play Computer &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Secrion 2 */}
      <div className="mt-10 bg-slate-300 mx-4 rounded-lg p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-end">
            <h1 className="text-4xl my-2">Solve Chess Puzzles</h1>
            <Link to="/game">
              <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 pr-11 rounded-lg">
                Solve Puzzles &rarr;
              </button>
            </Link>
            <div className=" font-thin mt-4 text-right">
              "Puzzles are the best way to improve pattern recognition and
              Problem Solving Skills.
              <span className="font-medium italic text-blue-700">
                {" "}
                Chess Nation{" "}
              </span>
              does it best !"
              <p className="font-medium italic">- Gukeesh D</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="max-w-96 rounded-lg pt-4 "
              src="https://ideogram.ai/api/images/direct/2O_McV7LRj6HrenvBHqw9g.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
