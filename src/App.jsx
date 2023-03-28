import React, { useState } from "react";
function App() {
  const [status, setStatus] = useState(true);
  return (
    <div className="App">
      <h1 onClick={() => setStatus(!status)}>
        Hello! React {status ? "SSR" : "CSR"} App
      </h1>
    </div>
  );
}

export default App;
