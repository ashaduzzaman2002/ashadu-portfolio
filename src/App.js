import React from 'react';

import { Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Skills />
    <Work />
    {/* <Testimonial />
    <About /> */}
    <Footer />
  </div>
);

export default App;
