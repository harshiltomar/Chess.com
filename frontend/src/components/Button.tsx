import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <Link to="/game">
      <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 pr-11 rounded-lg">
        Play Online &rarr;
      </button>
    </Link>
  );
};
