import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader';
import Recorder from 'react-mp3-recorder'
import { saveAs } from 'file-saver';
import FileSaver from 'file-saver'; 

export default class FileButton extends Component {

    _onRecordingComplete = (blob) => {
        console.log('recording', blob)
        FileSaver.saveAs(blob, "audio.mp3")
      }
     
      _onRecordingError = (err) => {
        console.log('recording error', err)
      }

    handleFiles = files => {
        console.log(files)
    }
    
    render() {
        return (
            <div>
                <ReactFileReader handleFiles={this.handleFiles}>
                    <button className='btn'>Record</button>
                </ReactFileReader>
                <Recorder
                    onRecordingComplete={this._onRecordingComplete}
                    onRecordingError={this._onRecordingError}
                />
            </div>
        )
    }

}
