import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 border-2 border-amber-700 border-solid">
        test
      </div>
    </div>
  );
}

export default App;
