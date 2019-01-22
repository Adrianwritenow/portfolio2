import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';

import Splash from './components/splash';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Review from './components/reviews';






import './App.css';

class App extends Component {
  render() {

    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    }
    return (
      <div className="App">

      <AnimatedBg>

        <Splash/>


        <Transition height="150vh" from="#000000" to="#12bfa4" position={0.95}>
        <div className='buffer'>
          <div className='projectBg' style={background}></div>
            <div className='aboutMask'></div>
        </div>

            <About/>

        </Transition>

        <Transition height="150vh" from="#12bfa4" to="#003C15" position={0.95}>

          <div className='buffer'>
            <div className='projectBg' style={background}></div>
              <div className='aboutMask'></div>
          </div>
          <Review/>


        </Transition>

        <Transition height="150vh" from="#003C15" to="#CC1C05" position={0.95}>
          <div className='buffer'>
            <div className='projectBg' style={background}></div>
              <div className='aboutMask'></div>
          </div>



          <Projects/>


        </Transition>

        <Transition height="150vh" from="#CC1C05" to="#F9C809" position={0.95}>
          <div className='buffer'>
            <div className='projectBg' style={background}></div>
              <div className='aboutMask'></div>
          </div>
          <Contact/>


        </Transition>

      </AnimatedBg>


      </div>
    );
  }
}

export default App;
