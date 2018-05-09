import React, { Component } from 'react';
import { getScrollPercent, getScrollTop, ScrollToAnimate } from './utils';
import './BackToTop.css';

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state={
      percent:0,
      current:0,
    };
    this.animate = this.props.animate||'fade'; /**1、fade(default) 2、rotate 3、none */
    this.mainStyle = this.props.mainStyle || {
      
    };
    this.percentStyle = this.props.percentStyle||{};
    this.offsetTop = this.props.offsetTop||0;
    this.step = this.props.step||50;
    this.visiblePercent = this.props.visiblePercent > 0 ? this.props.visiblePercent:1;
    this.isPercent = this.props.isPercent === undefined ? true : this.props.isPercent;
    window.onscroll = ()=>{
      this.setState({ percent: getScrollPercent(this.props.offsetTop) });
      this.setState({current:getScrollTop()});
    };
   
  }
  scrollToTop(){
    ScrollToAnimate(this.props.offsetTop, this.props.step, this.state.current);
  };
  componentDidMount() { }
  render() {
    const{animate} = this.props;
    let visible = this.state.percent >= this.visiblePercent;
    let animateHide = "c-animate-hide";
    let animateShow = "c-animate-show";
    if (animate!=="fade"&&animate!=="rotate") {
      if (animate!=='none') {
        animateHide = "fade-hide";
        animateShow = "fade-show";
      }
    }else{
      animateHide = animate + "-hide";
      animateShow = animate + "-show";
    }
    return <div onClick={() => this.scrollToTop()} className={"base-back-to-up " + (visible ? animateShow : animateHide)}>
        {/* <Icon type="up-square" className="to-top-icon" /> */}
        <div className='back-to-up-default' style={this.mainStyle} />
      <div className={"to-up-percent" + (this.isPercent ? "" :" percent-hide")}   style={ this.percentStyle }>
          {this.state.percent + "%"}
        </div>
      </div>;
  }
}
export default BackToTop;
