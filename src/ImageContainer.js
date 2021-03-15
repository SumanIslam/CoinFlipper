import React, { Component } from 'react';
import "./ImageContainer.css";
class ImageContainer extends Component {
  render() {
    return (
      <div className="ImageContainer">
        <img src={this.props.info.imgSrc} alt={this.props.info.side}></img>
      </div>
    );
  }
}

export default ImageContainer;