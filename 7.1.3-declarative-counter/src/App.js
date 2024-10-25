import React, { useState } from 'react';
import './App.css';

function App() {
  let [counter, changeCounter] = useState(1);
  return (
    window.changeCounter = changeCounter,
    <div>
    <h1>{counter}</h1>
    <h4>{counter}</h4>
    </div>
  );
}

export default App;
