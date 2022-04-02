import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>

  <div className='footer mt-5'>
          <div className=" container ">
              <div className="row">
                  <div className='col-md-4 mt-5'>
                      <h3 className='text-uppercase color text-center'>location</h3>
                      <p className='color text-center'>2215 John Daniel Drive<br />
                         Clark, MO 65243</p>
                  </div>
                  <div className='col-md-4 mt-5'>
                      <h3 className='text-uppercase color text-center'> around the web</h3>
                      <div className="icon mt-4 text-center">
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-linkedin-in"></i>
                      <i class="fab fa-dribbble"></i>
                      </div>
                  </div>
                  <div className='col-md-4 mt-5 mb-5'>
                      <h3 className='text-uppercase color text-center'> about freelancer</h3>
                      <p className='color text-center mt-2 fs-5'>Freelance is a free to use, MIT licensed <br />Bootstrap theme created by
                      <a href="#" className='alink'>Start<br /> Bootstrap .</a>
                      </p>
                  </div>
              </div>
      
          </div>
  </div>

  <div className="footer1">
      <p className='color text-center p-4'>Copyright &copy; Your Website 2021</p>
  </div>
      </>
    )
  }
}
