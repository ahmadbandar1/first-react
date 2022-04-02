
import React, { Component } from 'react'
import Navbar from '../Navbar/Nav'
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Countact/Contact'
import Footer from '../Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <>
     
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      </>
    )
  }
}

