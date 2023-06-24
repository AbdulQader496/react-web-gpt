import React from 'react';
import './App.css';
import { Article, Brand, CTA, Feature, Navbar } from './components/index';
import { Blog, Footer, Possibility, WhatGPT, Headers } from './containers/index';

// import {Header, Footer} from './containers/index'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar></Navbar>
        <Headers></Headers>
      </div>
      <Brand></Brand>
      <WhatGPT></WhatGPT>
      <Feature></Feature>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App