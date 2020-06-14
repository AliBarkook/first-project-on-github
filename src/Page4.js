import React, { Component } from 'react';
import {BrowserRouter as Router ,Switch ,Route ,Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page5 from './Page5.js'

import clockIcon from './clock-2.png';
import circleIcon from './circle.png';
import feedbackIcon from './feedback.png';
import flashIcon from './flash.png';
import chat from './chat.png';
import faceIcon from './face.png';

class Page4 extends React.Component{
  render(){
    return(
      <Router>
       
        <div className="text-center m-5 pt-5">
          <h2>Award-Winning Agency</h2>
          <p className="text-muted">Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:</p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 p-5 text-center page4-grid">
            <img src={clockIcon} alt="" width="50px" className="m-1"/>
            <h2>150</h2>
            <p>Happy Client</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-5 text-center page4-grid">
            <img src={circleIcon} alt="" width="40px" className="m-1"/>
            <h2>130</h2>
            <p>Project Complete</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-5 text-center page4-grid">
            <img src={feedbackIcon} alt="" width="45px" className="m-1"/>
            <h2>99</h2>
            <p>Positive Feedback</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-5 text-center page4-grid">
            <img src={flashIcon} alt="" width="25px" className="m-1"/>
            <h2>250</h2>
            <p>Cups of Coffee</p>
          </div>
        </div>
        
        <div className="text-center p-5" id="blue">
          <img src={chat} width="80px" className="mt-2" alt=""/>
          <p className="p-5">You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick=this.handleClick, you should bind that method.</p>
        </div>
        
        <div className="text-center" id="face-badge">
          <img src={faceIcon} alt="" width="140px"/>
          <h3 className="mt-2">Ali Barkook</h3>
          <p>developer, sayeh.co</p>
          <Link to={'/Cart'}><button className="btn btn-outline-warning">see objects</button></Link>
        </div>
         
        {/* <Switch> */}
          <Route path='/Cart' component={Page5} />
        {/* </Switch> */}
         
      </Router>
    )
  }
}

export default Page4