import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import clockLogo from './clock.png';
import mailLogo from './mail.png';
import lockLogo from './lock.png';
import handbagLogo from './handbag.png';
import humanLogo from './human-icon.png'


class Page2 extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: ""
    }

    this.updateUsername = this.updateUsername.bind(this)
    this.zoom = this.zoom.bind(this)
    this.unZoom = this.unZoom.bind(this)
    this.lineApear = this.lineApear.bind(this)
  }

  componentDidMount(){
    this.lineApear();
    let name = "Ali Barkook"
    let value = "frontent Developer"
    document.cookie = decodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/" ;
    // alert("cookies are: "  + decodeURIComponent(document.cookie));

  }

  updateUsername(e){
    this.setState({username: e.target.value})
    document.cookie = (this.state.username) + "= value";
  }

  zoom(e){
    e.currentTarget.style.transform = "scale(1.2)";
    e.currentTarget.style.transition = "transform .2s";
    // document.getElementById("Clock").style.transform= "scale(1.2) translateY(-10px)";
    // document.getElementById('Clock').style.transition= "transform .5s";
  }

  unZoom(e){
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.transition = "transform .2s";
  //   document.getElementById("Clock").style.transform= "rotate(0deg) translateY(0px)";
  //   document.getElementById('Clock').style.transition= "transform .5s";
  }

  lineApear(){
     let line = document.getElementsByClassName("underline");
     if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120)    {
       line[0].style.width = "25%";
       line[0].style.transition = "width 10s";
      }
      else{
        line[0].style.width = "0%";
        line[0].style.transition = "width 10s";
      }
  }
  render(){
    
    return(
      <div>
        <div className="text-center p-5" >
          <h1>What Do We Offer</h1>
          <p className="text-muted">All global JavaScript objects, functions, and variables automatically become members of the window object.</p>
          <hr className="underline"></hr>
        </div>

          <div className="row">
            <div className="col-md-3 col-sm-12 pt-5"><img className="" src={humanLogo} alt=""/></div>        

            <div className="col-md-3 col-sm-12 text-center p-5 m-5 bordered-boxes" onMouseOver={this.zoom} onMouseOut={this.unZoom}>
              <img width="50px" src={clockLogo} alt="" className="mb-3" id="Clock"/>
              <h3>Time Management</h3>
              <p className="text-muted">In the code above, newCookie is a string of form key=value. Note that you can only set/update a single cookie at a time using this method. Consider also that:</p>
            </div>  

            <div className="col-md-3  col-sm-12 text-center p-5 m-5 bordered-boxes" onMouseOver={this.zoom} onMouseOut={this.unZoom}>
              <img width="50px" src={handbagLogo} alt="" className="mb-3"/>
              <h3>Marketing Ideas</h3>
              <p className="text-muted">You will learn more about Bootstrap 4 grids later in this tutorial.</p>
            </div>  
            </div>

            
            <div className="row">
              <div className="col-md-3 col-sm-12 p-5 "></div>        

              <div className="col-md-3 col-sm-12 text-center p-5 m-5 bordered-boxes" onMouseOver={this.zoom} onMouseOut={this.unZoom}>
                <img width="50px" src={mailLogo} alt="" className="mb-3"/>
                <h3>Mail support</h3>
                <p className="text-muted">There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.</p>
              </div>  

              <div className="col-md-3  col-sm-12 text-center p-5 m-5  bordered-boxes" onMouseOver={this.zoom} onMouseOut={this.unZoom} >
                <img width="50px" src={lockLogo} alt="" className="mb-3"/>
                <h3>Secure System</h3>
                <p className="text-muted">Do not do that in a cookie. Save a hash in the cookie and store the corresponding user id in your database. You can't make the cookie secure.</p>
              </div>  
            </div>
      </div>
      
    )
  }
}

export default Page2