import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { Game } from "./screens/Game";
import { Navbar } from "./screens/Navbar";
import { Newuser } from "./screens/Newuser";

function App() {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
          <Route path="/new" element={<Newuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
