import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
      <div className="portfolio-des">
                  <h2 className='text-uppercase portfolio-header'>contact me</h2>
                  <div className="items d-flex justify-content-center align-items-center   fs-3">
                     <div className="ahmad1 "></div>
                      <i className="fas fa-star mx-3 " ></i>
                      <div className="ahmad1"></div>
                      
                  </div>
      </div>
<div className='container'>
  <div className='formContact w-75 m-auto'>
    
          <div class="form-floating mb-3 mt-5">
      <input type="text" class="form-control  " id="floatingInput" placeholder="Enter your name..."/>
      <label for="floatingInput ">Full Name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class=" form-control " id="floatingPassword" placeholder="name@example.com"/>
      <label for="floatingPassword">Email Address</label>
    </div>
    
    <div class="form-floating mb-3">
      <input type="tel" class=" form-control " id="floatingPassword" placeholder="(123) 456-7890"/>
      <label for="floatingPassword">Phone Number</label>
    </div>
    
    <div class="form-floating mb-3">
      <input type="text" class=" form-control " id="floatingPassword" placeholder="Enter your message here..."/>
      <label for="floatingPassword">Massage</label>
    </div>
    
    <button className='btn saeed py-3 ps-5 pe-5'>Send</button>
    
  </div>
 
</div>

   



          
    
      </>
    )
  }
}
