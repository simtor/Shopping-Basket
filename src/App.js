import './App.css';
import React from 'react'
// import ReactDOM from 'react-dom';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  if (count === -1){
    alert('The Basket is empty')
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Products
        </p>
        <div className="cart">
          <p>{count}</p>
        </div>
        <div>
      <button onClick={() => setCount(count + 1)}>
      Added to the basket
      </button>
    </div>
    <div>
      <button onClick={() => setCount(count -1)}>
      remove from the basket
      </button>
    </div>
      </header>
    </div>
  );
}

export default App;


