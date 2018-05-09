import React, { Component } from "react";
import BackToTop from '../../';
export default class App extends Component {
  render(){
    return (
    <div style={{height:'1000px'}}>test
      <BackToTop
        className="test"
        offsetTop={0}
        step={24}
        visiblePercent={20}
        />
    </div>
    )
  }
}