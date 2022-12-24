import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import usePermission from "./components/usePermission";

function App() {
  const [count, setCount] = useState(0);
  const [access, setAccess] = React.useState(() => usePermission());

  return (
    <div className="App">
      <div>
        {access.find((a) => a === "write") ? <div>You can write here</div> : ""}
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
