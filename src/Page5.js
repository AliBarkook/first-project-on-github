import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import card1 from './5978.jpg';
import card2 from './5988.jpg'
import card3 from './5996.jpg'

import ReadLocalStorage from './App.service'

class Page5 extends React.Component{
    constructor(){
      super()
      // let hol = JSON.parse(localStorage.item1)
      // let hol2 = JSON.parse(localStorage.item2)
      // let hol3 = JSON.parse(localStorage.item3)
      this.state = {
        cart1: "",
        cart2: "",
        cart3: ""
      }
    
      this.deleteCart = this.deleteCart.bind(this)
      this.item1Minus = this.item1Minus.bind(this)
      this.item2Minus = this.item2Minus.bind(this)
      this.item3Minus = this.item3Minus.bind(this)
      this.item1Plus = this.item1Plus.bind(this)
      this.item2Plus = this.item2Plus.bind(this)
      this.item3Plus = this.item3Plus.bind(this)
    }
  
    // componentDidMount(){
    //   let holder1 = JSON.parse(localStorage.item1)
    //   let holder2 = JSON.parse(localStorage.item2)
    //   let holder3 = JSON.parse(localStorage.item3)
    //   document.getElementById("item1-quantity").innerHTML = holder1.quantity
    //   document.getElementById("item2-quantity").innerHTML = holder2.quantity
    //   document.getElementById("item3-quantity").innerHTML = holder3.quantity
    //   if(holder1.quantity === 1){
    //     document.getElementById("item1Minus").classList.add("material-icons")
    //     document.getElementById("item1Minus").innerHTML = "delete"
    //   }
    //   if(holder1.quantity === 0){
    //     document.getElementById("cart-basket-item1").style.display = "none"
    //    }
    //    if(holder2.quantity === 1){
    //     document.getElementById("item2Minus").classList.add("material-icons")
    //     document.getElementById("item2Minus").innerHTML = "delete"
    //   }
    //   if(holder2.quantity === 0){
    //     document.getElementById("cart-basket-item2").style.display = "none"
    //    }
    //    if(holder3.quantity === 1){
    //     document.getElementById("item3Minus").classList.add("material-icons")
    //     document.getElementById("item3Minus").innerHTML = "delete"
    //   }
    //   if(holder3.quantity === 0){
    //     document.getElementById("cart-basket-item3").style.display = "none"
    //    }
    // }
  
    deleteCart(){
      localStorage.removeItem("item1")
      localStorage.removeItem("item2")
      localStorage.removeItem("item3")
      document.getElementById("item1-quantity").innerHTML = "0";
      document.getElementById("item2-quantity").innerHTML = "0";
      document.getElementById("item3-quantity").innerHTML = "0";
      document.getElementById("cart-basket-item1").style.display = "none"      
      document.getElementById("cart-basket-item2").style.display = "none"     
      document.getElementById("cart-basket-item3").style.display = "none"      
    } 
  
    item1Plus(){
      // let holder = JSON.parse(localStorage.item1)
      // holder.quantity++;
      // localStorage.setItem("item1", JSON.stringify(holder))
      ReadLocalStorage.quantityPlus(1);
      // document.getElementById("item1-quantity").innerHTML = holder.quantity
      // if(holder.quantity !=0){
      //   document.getElementById("item1Minus").innerHTML = "-"
      //   document.getElementById("item1Minus").classList.remove("material-icons")
      // }
      // document.getElementById("item1TotalPrice").innerHTML = holder.quantity * holder.price
    }
  
    item2Plus(){
      let holder = JSON.parse(localStorage.item2)
      holder.quantity++;
      localStorage.setItem("item2", JSON.stringify(holder))
      document.getElementById("item2-quantity").innerHTML = holder.quantity
      if(holder.quantity !==0){
        document.getElementById("item2Minus").innerHTML = "-"
        document.getElementById("item2Minus").classList.remove("material-icons")
      }
      document.getElementById("item2TotalPrice").innerHTML = holder.quantity * holder.price
    }
  
    item3Plus(){
      let holder = JSON.parse(localStorage.item3)
      holder.quantity++;
      localStorage.setItem("item3", JSON.stringify(holder))
      document.getElementById("item3-quantity").innerHTML = holder.quantity
      if(holder.quantity !==0){
        document.getElementById("item3Minus").innerHTML = "-"
        document.getElementById("item3Minus").classList.remove("material-icons")
      }
      document.getElementById("item3TotalPrice").innerHTML = holder.quantity * holder.price
    }
  
    item1Minus(e){
      let holder1 = JSON.parse(localStorage.item1)
      document.getElementById("item1-quantity").innerHTML = holder1.quantity
      if(e.target.innerHTML == "-"){
        holder1.quantity--;
        localStorage.setItem("item1", JSON.stringify(holder1))
        document.getElementById("item1-quantity").innerHTML = holder1.quantity
        if(holder1.quantity == 1){
          e.target.classList.add("material-icons")
          e.target.innerHTML = "delete"
        }
        else{
          e.target.innerHTML = "-"
          e.target.classList.remove("material-icons")
        }
      }
      else{
        document.getElementById("cart-basket-item1").style.display = "none"
        localStorage.removeItem("item1")
      }
      document.getElementById("item1TotalPrice").innerHTML = holder1.quantity * holder1.price
    }
  
    item2Minus(e){
      let holder = JSON.parse(localStorage.item2)
      document.getElementById("item2-quantity").innerHTML = holder.quantity
      if(e.target.innerHTML == "-"){
        holder.quantity--;
        localStorage.setItem("item2", JSON.stringify(holder))
        document.getElementById("item2-quantity").innerHTML = holder.quantity
        if(holder.quantity == 1){
          e.target.classList.add("material-icons")
          e.target.innerHTML = "delete"
        }
        else{
          e.target.innerHTML = "-"
          e.target.classList.remove("material-icons")
        }
      }
      else{
        document.getElementById("cart-basket-item2").style.display = "none"
        localStorage.removeItem("item2")
      }
      document.getElementById("item2TotalPrice").innerHTML = holder.quantity * holder.price
    }
  
    item3Minus(e){
      let holder = JSON.parse(localStorage.item3)
      document.getElementById("item3-quantity").innerHTML = holder.quantity
      if(e.target.innerHTML == "-"){
        holder.quantity--;
        localStorage.setItem("item3", JSON.stringify(holder))
        document.getElementById("item3-quantity").innerHTML = holder.quantity
        if(holder.quantity == 1){
          e.target.classList.add("material-icons")
          e.target.innerHTML = "delete"
        }
        else{
          e.target.innerHTML = "-"
          e.target.classList.remove("material-icons")
        }
      }
      else{
        document.getElementById("cart-basket-item3").style.display = "none"
        localStorage.removeItem("item3")
      }
      document.getElementById("item3TotalPrice").innerHTML = holder.quantity * holder.price
    }
  
    // itemMinus(e){
    //   let holder =[]
    //   holder[1] = JSON.parse("localStorage.item1")
    //   holder[2] = JSON.parse(localStorage.item2)
    //   holder[3] = JSON.parse(localStorage.item3)
    //   document.getElementById("item1-quantity").innerHTML = holder[1].quantity
    //   document.getElementById("item2-quantity").innerHTML = holder[2].quantity
    //   document.getElementById("item3-quantity").innerHTML = holder[3].quantity
    //   if(e.target.innerHTML == "-"){
    //     holder[e].quantity--;
    //     localStorage.setItem("item" + [e], JSON.stringify(holder[e]))
    //     document.getElementById("item" + [e] + "-quantity").innerHTML = holder[e].quantity
    //     if(holder[e].quantity == 1){
    //       e.target.classList.add("material-icons")
    //       e.target.innerHTML = "delete"
    //     }
    //     else{
    //       e.target.innerHTML = "-"
    //       e.target.classList.remove("material-icons")
    //     }
    //   }
    //   else{
    //     document.getElementById("cart-basket-item" + [e]).style.display = "none"
    //   }
    // }
  
    item1(){
      if(!localStorage.item1){
        localStorage.setItem("item1", JSON.stringify({item: "item1", quantity: 0, price:19000 }))    
      }
      let holder = JSON.parse(localStorage.item1)
      holder.quantity++;
      localStorage.setItem("item1", JSON.stringify(holder))
      document.getElementById("cart-basket-item1").style.display = "block"  
      document.getElementById("item1-quantity").innerHTML = holder.quantity
      document.getElementById("item1TotalPrice").innerHTML = holder.quantity * holder.price
      if(holder.quantity == 1){
        document.getElementById("item1Minus").classList.add("material-icons")
        document.getElementById("item1Minus").innerHTML = "delete"
      }
      else{
        document.getElementById("item1Minus").innerHTML = "-"
        document.getElementById("item1Minus").classList.remove("material-icons")
      }
    }
  
    item2(){
      if(!localStorage.item2){
        localStorage.setItem("item2", JSON.stringify({item: "item2", quantity: 0, price:48500}))
      }
      let holder = JSON.parse(localStorage.item2)
      holder.quantity++;
      localStorage.setItem("item2", JSON.stringify(holder))
      document.getElementById("cart-basket-item2").style.display = "block"  
      document.getElementById("item2-quantity").innerHTML = holder.quantity
      document.getElementById("item2TotalPrice").innerHTML = holder.quantity * holder.price
      if(holder.quantity == 1){
        document.getElementById("item2Minus").classList.add("material-icons")
        document.getElementById("item2Minus").innerHTML = "delete"
      }
      else{
        document.getElementById("item2Minus").innerHTML = "-"
        document.getElementById("item2Minus").classList.remove("material-icons")
      }
    }
  
    item3(){
      if(!localStorage.item3){
        localStorage.setItem("item3", JSON.stringify({item: "item3", quantity: 0, price:24000 }))
      }
      let holder = JSON.parse(localStorage.item3)
      holder.quantity++;
      localStorage.setItem("item3", JSON.stringify(holder))
      document.getElementById("cart-basket-item3").style.display = "block"  
      document.getElementById("item3-quantity").innerHTML = holder.quantity
      document.getElementById("item3TotalPrice").innerHTML = holder.quantity * holder.price
      if(holder.quantity == 1){
        document.getElementById("item3Minus").classList.add("material-icons")
        document.getElementById("item3Minus").innerHTML = "delete"
      }
      else{
        document.getElementById("item3Minus").innerHTML = "-"
        document.getElementById("item3Minus").classList.remove("material-icons")
      }
    }
  
  //  total(){
  //   let x = document.getElementById("item3TotalPrice").innerHTML
  //   let j = document.getElementById("item2TotalPrice").innerHTML
  //   let k = document.getElementById("item1TotalPrice").innerHTML
  //   document.getElementById("totalPrice").innerHTML = x+j+k
  //  }
  
    render(){
      return(
        <div className="jumbotron">
  
          <div className="text-center">
            <h2>select card</h2>
            <hr className="underline"></hr>
            <p className="text-muted">Learning how to manage the browser page: add elements, manipulate their size and position, dynamically create interfaces and interact with the visitor.</p>
          </div>
  
          <div className="row">
          
            <div className="col-lg-4 col-sm-12 card">
              <img className="card-img-top" alt="card-img" src={card1}/>
              <div className="card-body">
               <h4 className="card-title">item 1:</h4>
               <h5>19.000</h5>
                <p className="card-text text-muted">Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.</p>
              </div>
              <div className="cart-footer m-3">
                <button className="btn btn-primary mb-3" onClick={this.item1}>Add to cart</button>
              </div>
            </div>
  
            <div className="col-lg-4 col-sm-12 card">
              <img className="card-img-top" alt="card-img" src={card2}/>
              <div className="card-body">
               <h4 class="card-title">item 2:</h4>
               <h5>24,000</h5>
                <p className="card-text text-muted">Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.</p>
              </div>
              <div className="cart-footer m-3">
                <button className="btn btn-primary mb-3" onClick={this.item2}>Add to cart</button>
              </div>
            </div>
  
            <div className="col-lg-4 col-sm-12 card">
              <img className="card-img-top" alt="card-img" src={card3}/>
              <div className="card-body">
               <h4 class="card-title">item 3:</h4>
               <h5>48,500</h5>
                <p class="card-text text-muted">Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.Some example text.   </p>
              </div>
              <div className="cart-footer m-3">
                <button className="btn btn-primary mb-3" onClick={this.item3}>Add to cart</button>
              </div>
            </div>
  
          </div>
  
  
          
          <div className="bg-dark p-5">
            <div className="row ">
    
              <div className="col-8-lg bg-light" id="cart-basket">
                <div className="border rounded cart-item p-3" id="cart-basket-item1">
                <h3>item1</h3>
                  <img className="card-img-top" alt="cart-card-img" src={card1}/>
                  <div class="btn-group btn-group-lg border m-4">
                    <button type="button" class="btn btn-light"  id="item1Minus" onClick={this.item1Minus}>-</button>
                    <h5 id="item1-quantity" className="p-3 bg-dark text-white">0</h5>
                    <button type="button" class="btn btn-light" onClick={this.item1Plus}>+</button>
                  </div>
                  <span>total price :</span>
                  <span id="item1TotalPrice"></span>
                </div>
    
                <div className="border rounded cart-item p-3" id="cart-basket-item2">
                <h3>item2</h3>
                  <img className="card-img-top" alt="cart-card-img" src={card2}/>
                  <div class="btn-group btn-group-lg border m-4">
                    <button type="button" class="btn btn-light" id="item2Minus" onClick={this.item2Minus}>-</button>
                    <h5 id="item2-quantity" className="p-3 bg-dark text-white">0</h5>
                    <button type="button" class="btn btn-light" onClick={this.item2Plus}>+</button>
                  </div>
                  <span>total price :</span>
                  <span id="item2TotalPrice"></span>
                </div>
    
                <div className="border rounded cart-item p-3" id="cart-basket-item3">
                <h3>item3</h3>
                  <img className="card-img-top" alt="cart-card-img" src={card3}/>
                  <div class="btn-group btn-group-lg border m-4">
                    <button type="button" class="btn btn-light" id="item3Minus" onClick={this.item3Minus}>-</button>
                    <h5 id="item3-quantity" className="p-3 bg-dark text-white">0</h5>
                    <button type="button" class="btn btn-light" onClick={this.item3Plus}>+</button>
                  </div>
                  <span>total price :</span>
                  <span id="item3TotalPrice"></span>
                </div>
              </div>
    
              <div className="col-4-lg jumbotron ml-auto">
               <button className="btn btn-danger" onClick={this.deleteCart}>delete cart</button>
               {/* <h3 id="totalItem1">total:</h3>
               <h3 id="totalPrice"></h3> */}
              </div>
    
            </div>      
        </div>
          
        </div>
        
      )
    }
  }

  export default Page5