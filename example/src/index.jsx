import React from 'react';
import BackToTop from '../../';
import { render } from 'react-dom';
import './test.css';
var element = document.getElementById("root");
render(
  <div style={{height:'10000px'}}>
    test
    <BackToTop
    
    animate='rotate'
    offsetTop={20}
    step={50}
    visiblePercent={50}
  />
  </div>,element);