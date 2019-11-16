import React, { Component } from 'react';
import FileShape from './FileShape';
import PropTypes from 'prop-types';

class File extends Component {
  render(){
    return this.props.files.map((file) => (
        <FileShape key = {file.fileName} file={file} />
    ));
  }
}

File.propTypes = {
  files: PropTypes.array.isRequired
}

export default File; 