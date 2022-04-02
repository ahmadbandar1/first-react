import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
       <div className='about-section my-5 p-5'> 
           
               <div className="about">
                          <h2 className='text-uppercase about-header'>about</h2>
                          <div className="items d-flex justify-content-center align-items-center my-3  fs-3">
                             <div className="ahmad "></div>
                              <i className="fas fa-star mx-3 " ></i>
                              <div className="ahmad"></div>
                              
                          </div>
                      </div>
           
           <div className='container '>
                
              <div className='w-md-75 m-auto para '>
                   <div className="row">
                     
                           <div className="col-md-6  ">
                               <p >Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
                           </div>
                           <div className="col-md-6 ">
                               <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                           </div>
                      </div>
              </div>
              <button className='  co w-md-25 text-capitalize  fs-3 d-flex align-items-center justify-content-center '>
              <i className="fas fa-download me-2"></i>free download! </button>
               </div>
           </div>
       
      </>
    )
  }
}
