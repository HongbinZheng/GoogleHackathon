import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader';
import Recorder from 'react-mp3-recorder'
import FileSaver from 'file-saver'; 
import { blobToBase64String } from 'blob-util'

export default class FileButton extends Component {

    _onRecordingComplete = (blob) => {
        console.log('recording', blob)
        blob.name = 'audio.mp3'
        FileSaver.saveAs(blob, "audio.mp3")
      }
     
      _onRecordingError = (err) => {
        console.log('recording error', err)
      }

    handleFiles = files => {
        console.log(files)
    }

    getStyle = () => {
        return {
            position: 'absolute', left: '50%', top: '25%',
            transform: 'translate(-50%, -50%)'
        }
    }
    
    render() {
        return (
            <div style={this.getStyle()}>
                <Recorder 
                    onRecordingComplete={this._onRecordingComplete}
                    onRecordingError={this._onRecordingError}
                />
            </div>
        )
    }

}
