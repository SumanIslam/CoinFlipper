import React, { Component } from "react";
import ImageContainer from "./ImageContainer";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  // props
  static defaultProps = {
    coins: [
      {
        side: "Head",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
      },
      {
        side: "Tail",
        imgSrc:
          "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg",
      },
    ],
  };

  // constructors
  constructor(props) {
    super(props);
    // state
    this.state = {
      currCoin: null,
      nHead: 0,
      nTail: 0,
      nFlips: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // event handler
  handleClick(e) {
    let newCoin = this.props.coins[
      Math.floor(Math.random() * this.props.coins.length)
    ];
    // setState
    this.setState((currstate) => {
      return {
        currCoin: newCoin,
        nFlips: currstate.nFlips + 1,
        nHead: currstate.nHead + (newCoin.side === "Head" ? 1 : 0),
        nTail: currstate.nTail + (newCoin.side === "Tail" ? 1 : 0),
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Lets flip a coin!</h1>
        {this.state.currCoin && <ImageContainer info={this.state.currCoin} />}
        <button onClick={this.handleClick} className="btn">Flip ME</button>
        <p>
          Out of <span>{this.state.nFlips}</span> flips, There have been{" "}
          <span>{this.state.nHead}</span> heads and{" "}
          <span>{this.state.nTail}</span> tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
