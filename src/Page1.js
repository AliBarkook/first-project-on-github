import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Page1 extends React.Component{
  render(){
    return(
      <div className="container-fluid bg-dark text-center p-5  mb-5" id="page1">
        <div className="text-center m-auto">
          <h1 className="text-white">WE COMBINE DESIGN AND CREATIVITY</h1>
          <p className="text-white">The Document property cookie lets you read and write cookies associated with the document. It serves as a getter and setter for the actual values of the cookies.</p>
          <button type="button" className="btn btn-primary px-4">EXPLORE US</button>
        </div>
      </div>
    )
  }
}

export default Page1
