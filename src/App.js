import React, { Component } from 'react';

// class App extends Component {
//   render(){
//     const dom = (
//       <>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked!")}} />
//       </>
//     )
//     return dom;
//   }
// }

const App = () => {
  return (
    <dev>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </dev>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
