import './Style.css';
import React from 'react';

function App() {
  return (
      <div className="App">
        <h1>Hello</h1>
        <p className="text">HelloText</p>
        <hr/>
        <select>
            <option value={1}>Pizza</option>
            <option value={2}>Sushi</option>
            <option value={3}>{React.version}</option>
        </select>
        <hr/>
        <img src={require("./react-logo.png")} alt={"react"} title={"react"}/>
      </div>
  );
}

export default App;
