import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/MissyMcGee1/react-final-project.git"
            target="_blank"
          >
            Open source code
          </a>{" "}
          by Missy McGee
        </footer>
      </div>
    </div>
  );
}
