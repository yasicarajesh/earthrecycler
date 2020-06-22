import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Icon from './components/home';
import About from './components/about';

import Service from './components/service';
// import Cta from './components/cta-1';
// import Doctor from './components/doctor';
// import Test from './components/testimonial';
// import Ct2 from './components/ct2';
// import Contact from './components/contact';
// import Footer from './components/footer';
// import About from './components/about';



class App extends React.Component{
  render(){
    return(
      <>

      
      <Header/>
      <Icon/>
      <main id="main"></main>
      <About/>
      <Service/>
      


   </>
    );
  }
}


export default App;
