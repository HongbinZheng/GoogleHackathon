import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader';
import Recorder from 'react-mp3-recorder'
import { saveAs } from 'file-saver';
import FileSaver from 'file-saver'; 
import axios from 'axios';
export default class FileButton extends Component {

    state = {
        audUpload: '',
      }


    _onRecordingComplete = (blob) => {
        console.log('recording', blob)
        FileSaver.saveAs(blob, "audio.flac")
      }
     
      _onRecordingError = (err) => {
        console.log('recording error', err)
      }

    handleFiles = files => {
        console.log(files)
    }
    press(){
        axios.get('/api').then(res=>{
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                    <button className='btn' onClick={this.press}>Record</button>
                <Recorder
                    onRecordingComplete={this._onRecordingComplete}
                    onRecordingError={this._onRecordingError}
                />
            </div>
        )
    }

}
