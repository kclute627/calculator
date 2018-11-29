import React, { Component } from 'react';
import Numbers from '../Components/Numbers';

import './App.css';

class App extends Component {

  state = {
    screenDisplay: '',
    buttonsPushed: '',
  }



  render() {
    return (
      <div className="App">
      <Numbers />
       
      </div>
    );
  }
}

export default App;
