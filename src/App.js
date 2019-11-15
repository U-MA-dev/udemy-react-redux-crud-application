import React, { Component } from 'react';

class App extends Component {
  render(){
    const dom = (
      <>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!")}} />
      </>
    )
    return dom;
  }
}

export default App;
