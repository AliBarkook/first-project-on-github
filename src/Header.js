import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import loginIcon from './SeekPng.com_login-icon-png_1387775.png'

class Header extends React.Component{
  constructor(){
    super();

    this.state = {
      username: "",
      password: "",
      remember: false
    }

    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this);
    this.updateRememberme = this.updateRememberme.bind(this);
    this.login = this.login.bind(this);

  }

  componentDidMount(){
  }

  login(){
    if(document.getElementById("UN").value !=0 && document.getElementById("PW").value !=0){
    let name = this.state.username;
    let pass = this.state.password;
    let remember = this.state.remember
    localStorage.user = JSON.stringify({name: name, password: pass, rememberMe: remember})
    let holder = JSON.parse(localStorage.user)
    document.getElementById("name").innerHTML= "welcome " + holder.name;
    document.getElementById("loginButton").style.display = "none";
  }
  else{
    alert("your username or password is wrong !!!")
  }
  }

  updateUsername(e){
    this.setState({username : e.target.value});
  }

  updatePassword(e){
    this.setState({password : e.target.value})
  }

  updateRememberme(){
    this.setState({remember : !this.state.remember})
  }

  render(){
    return(
      <div className="">
        <nav className="navbar navbar-expand-sm bg-dark fixed-top">
        <h2 className="text-white">BINGO</h2>
        <ul class=" nav navbar-nav float-right ml-auto" id="desktop-nav">
                  <li className="nav-item m-3 align-self-center"><a className="nav-link" href="/">ABOUT US</a></li>
                  <li className="nav-item m-3 align-self-center"><a className="nav-link" href="/">SERVICES</a></li>
                  <li className="nav-item m-3 align-self-center"><a className="nav-link" href="/">PORTOFOLIO</a></li>
                  <li className="nav-item m-3 align-self-center"><a className="nav-link" href="/">TEAM</a></li>
                  <li className="nav-item m-3 align-self-center"><a className="nav-link" href="/">PRISING</a></li>
                  <li className="nav-item m-3 align-self-center"><a className="nav-link" href="/">CONTACT</a></li>
                  {/* <li className="nav-item m-3 align-self-center">
                      <button id="pages" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" type="button">PAGES</button>
                      <div id="dropdown-page" className="dropdown-menu">
                          <button class="dropdown-item"><a class="nav-link" href="#page-1">Page 1</a></button>
                          <button class="dropdown-item"><a class="nav-link" href="#page-2">Page 2</a></button>
                          <button class="dropdown-item"><a class="nav-link" href="#page-3">Page 3</a></button>
                          <button class="dropdown-item"><a class="nav-link" href="#page-4">Page 4</a></button>
                          <button class="dropdown-item"><a class="nav-link" href="#page-5">Page 5</a></button>
                      </div>
                  </li> */}
                  <li className="nav-item m-3 align-self-center"><button className="btn btn-outline-info">cart</button></li>
                  <li className="nav-item m-3 align-self-center"> {/*login*/}
                    <div>
                      <button className="btn btn-info" type="button" data-toggle="modal" data-target="#login" id="loginButton">login</button>
                      <h5 className="text-white text-center " id="name"> </h5>
                    </div>
                  </li>
                  
              </ul>
        </nav>

        <div className="modal fade" id="login" >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header text-center align-self-center">
                <img src={loginIcon} alt="login icon" />
              </div>

              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="UN">username:</label>
                    <input className="form-control" placeholder="enter the usename ..." type="username" id="UN" value={this.state.username} onChange={this.updateUsername}/>
                  </div>
                  <div className="form-group">
                    <label for="PW">password:</label>
                    <input className="form-control" placeholder="enter the password ..." type="password" id="PW" value={this.state.password} onChange={this.updatePassword}/>
                  </div>
                  <button type="submit" className="btn btn-outline-success" id="submit" data-dismiss="modal" onClick={this.login}>login</button>
                  <div className="mt-2">
                    <label className="control-label" for="RM">remember me</label>
                    <input className="control-input mx-3" type="checkbox" id="RM" value={this.state.remember} onChange={this.updateRememberme}/>
                  </div>
                </form>
              </div>

              <div class="modal-footer">
               <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
       </div>

      </div>
    )
  }
}

export default Header