import React, { Component } from 'react';
import File from './components/File';


import './App.css';

class App extends Component {
  state = {
    file: [
      {
        fileName: 'Test'
      },
      {
        fileName: 'Test2'
      }
    ]
  }
  
  
  render(){
    console.log(this.state.files)
    return (
      <div className="App">
        <File files={this.state.file} />     
      </div>
    );
  }
}

export default App;
