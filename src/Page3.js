import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import laptopIcopn from './laptop.png';

class Page3 extends React.Component{
  constructor(){
    super()

    this.state ={
      show: true
    }

  }

  componentDidUpdate(){
    if(this.state.show){
      return null
    }

  }

  render(){
    return(
      
      <div>
        <div className="p-5 jumbotron">  {/*session 1*/}
          <div className="text-center">
            <h2>We Are Bingo Agency</h2>
            <p className="text-muted">Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences</p>
            <hr className="underline"></hr>
          </div>

          <div className="row m-5">
            <div className="col-md-6 col-sm-12">
              <img src={laptopIcopn} alt="laptop"/>
            </div>
            <div className="col-md-6 col-sm-12 m-auto pl-5">
              <ul id="list">
                <li className="text-dark">aaaaaaaaaaaaaaaaaaaaa</li>
                <li>bbbbbbbbb</li>
                <li>cccccccccccccccccccccccccccccccc</li>
                <li>dddd</li>
                <li>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</li>
                <li>fffffffffffffffffffffffffffff</li>
                <button type="button" className="btn btn-primary px-4">LEARN MORE</button>
              </ul>
            </div>
          </div>
        </div>

          <div id="page3-img"> {/*session 2*/}
            <div className="text-center" id="page3-img-in">
              <h2 className="text-white">Let's Create Something Together</h2>
              <p className="text-muted">The following example shows how to create four equal-width columns starting at tablets and scaling to extra large desktops. On mobile phones or screens that are less than 576px wide, the columns will automatically stack on top of each other:</p>
              <button type="button" className="btn btn-primary px-4">CONTACT US</button>
            </div>
          </div>

      </div>
    )
  }
}

export default Page3