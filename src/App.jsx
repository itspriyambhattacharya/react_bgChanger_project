import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  function addRed() {
    setColor("red"); // not a good way to add color
  }
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center gap-5 fixed bottom-12 inset-x-0 py-6 bg-white">
          <button
            onClick={addRed}
            className="cursor-pointer bg-red-700 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="cursor-pointer bg-blue-700 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="cursor-pointer bg-green-700 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="cursor-pointer bg-yellow-300 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="cursor-pointer bg-pink-400 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="cursor-pointer bg-black px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
