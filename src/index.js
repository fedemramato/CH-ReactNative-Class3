import React from "react";
import ReactDOM from "react-dom";
import Saludo from "./saludo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Saludo nombre="John Doe" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
