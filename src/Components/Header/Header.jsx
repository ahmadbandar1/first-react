import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      
      <>

    <div className='header vh-100 text-center'>
         <div className='header-content w-md-60 mt-5 p-5'>
              <div className="img m-auto mt-5 ">
                  <img src="img/avataaars.svg " alt="" />
              </div>
              <div className="heder-item color">
                  <h1 className="text-uppercase mt-4  fw-bold fs">start bootstrap </h1>
             
                  <div className="items d-flex justify-content-center align-items-center my-3  fs-3">
                     <div className="ahmad "></div>
                      <i className="fas fa-star mx-3"></i>
                      <div className="ahmad"></div>
                      
                  </div>
                  <p className='text-capitalize fs-4 '>graphic artist - web designer - lllustrator</p>
                  
              </div>
         </div>
    </div>
      </>
    )
  }
}

