import { useState } from "react";
import "./App.css";

import { MineSweeper } from "./MineSweeper.jsx";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <MineSweeper />
    </>
  );
}

export default App;
