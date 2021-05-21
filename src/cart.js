import './App.css';
// import {totalAmount,count} from "./main"
// import {count} from "./main"
import React from 'react';

// function cart() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Simone ram</p>
//       </header>
//     </div>
//   );
// }

// export default App;


function cart(){
  // console.log(`test is: ${ Main }`);
  return(
      <div className="App">
      <h1>Your Shopping Basket</h1>
      <p>Amount of items: </p>
      <p>Total: </p>
      </div>
  )
}


export default cart