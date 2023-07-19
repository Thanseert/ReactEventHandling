import React, { useState } from "react";

function App() {
  function handle() {
    console.log("click");
  }
  const [color, setcolor] = useState(true);
  function style() {
    setcolor(false);
  }

  function back() {
    setcolor(true);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color ? "black" : "white" }}
        onMouseOver={style}
        onMouseOut={back}
        onClick={handle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
