export const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-6 bg-black text-white">
      <div className="font-bold text-2xl">
        CHESS<span className="font-thin text-lg">Nation</span>
      </div>
      <div className="flex space-x-6 mr-6 font-thin">
        <h1>Puzzles</h1>
        <h1>Spectate</h1>
        <div>LOGOUT</div>
      </div>
    </div>
  );
};
