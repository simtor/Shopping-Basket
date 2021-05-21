import './App.css';
import React from 'react'
import './cart'
import { useState} from 'react';

function Main() {
  const [count, setCount] = useState(0);
  if (count === -1){
    alert('The Basket is empty')
    setCount(count + 1);
  }
  function handleLink(nav) {
    window.location.href = nav;
    console.log('The link was clicked.')
  }
  let totalAmount = (count*5.99).toFixed(2);;
  console.log(totalAmount)

  return (
    <div className="App">
      <header className="App-header">
        <p>
        Products
        </p>
        <div className="cart-button">
          <button onClick={()=>{handleLink("/cart")}}>{count} £{totalAmount}</button>
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

export default Main;
