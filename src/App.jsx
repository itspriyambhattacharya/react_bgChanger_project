import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center gap-5 fixed bottom-12 inset-x-0 py-6 bg-white">
        <button className="cursor-pointer bg-red-700 px-4 py-2 w-[90px] rounded-4xl text-white">
          Red
        </button>
        <button className="cursor-pointer bg-blue-700 px-4 py-2 w-[90px] rounded-4xl text-white">
          Blue
        </button>
        <button className="cursor-pointer bg-green-700 px-4 py-2 w-[90px] rounded-4xl text-white">
          Green
        </button>
        <button className="cursor-pointer bg-yellow-700 px-4 py-2 w-[90px] rounded-4xl text-white">
          Yellow
        </button>
        <button className="cursor-pointer bg-pink-400 px-4 py-2 w-[90px] rounded-4xl text-white">
          Pink
        </button>
        <button className="cursor-pointer bg-black px-4 py-2 w-[90px] rounded-4xl text-white">
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
