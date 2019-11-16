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
        <h1 style = {{position: 'absolute', left: '50%', top: '10%',
            transform: 'translate(-50%, -50%)'}}>Worda</h1>
          <FileButton />     
      </div>
    );
  }
}

export default App;
