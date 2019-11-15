import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class FileShape extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}
FileShape.propTypes = {
    file: PropTypes.object.isRequired
  }

export default FileShape
