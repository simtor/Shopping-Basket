
import * as React from 'react';
import './App.css';
import Cart from './cart'
import {Route, Switch} from 'react-router-dom';
import Main from './main';

function App () {
  return(
    <main>
    <Switch>
    <Route exact path="/">
        <Main />
      </Route>
        <Route path="/cart"component={Cart} exact/>
    </Switch>
    </main>
  )
};




  export default App


















































// import './App.css';
// import React from 'react'
// import './cart'
// import { useState } from 'react';
// import Cart from './cart'
// import {Route, Switch} from 'react-router-dom';

// function App() {
//   const [count, setCount] = useState(0);
//   if (count === -1){
//     alert('The Basket is empty')
//     setCount(count + 1);
//   }
//   function handleLink(nav) {
//     window.location.href = nav;
//     console.log('The link was clicked.')
// }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//         Products
//         </p>
//         <div className="cart-button">
//           <button>{count}</button>
//         </div>
//         <div>
//       <button onClick={() => setCount(count + 1)}>
//       Added to the basket
//       </button>
//     </div>
//     <div>
//       <button onClick={() => setCount(count -1)}>
//       remove from the basket
//       </button>
//     </div>
//     <div>
//       <button onClick={()=>{handleLink("/cart")}}>
//         SELECT
//       </button>
//     </div>
//       </header>
//       <Switch>
//         <Route path="/cart"component={Cart} exact/>
//     </Switch>
//     </div>
//   );
// }

// export default App;


