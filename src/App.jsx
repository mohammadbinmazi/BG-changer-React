import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");
  // function changeColor(color) {
  //   setcolor(color);
  // }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl bg-black">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg  text-white bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg  text-white bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg  text-white bg-blue-600"
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg  text-white bg-yellow-500"
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg  text-white bg-pink-400"
          >
            Pink
          </button>
          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-4 py-1 rounded-full
            shadow-lg  text-white bg-orange-600"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
