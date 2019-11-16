import React, { Component } from 'react';
import File from './components/File';
import FileButton from './components/FileButton';


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
    return (
      <div className="App">
        <h1>Warda</h1>
          <FileButton />     
      </div>
    );
  }
}

export default App;
