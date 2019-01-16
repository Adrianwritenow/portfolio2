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
    return (
      <div className="App">
      <AnimatedBg>

        <Splash/>
        <Transition height="100vh" from="#000000" to="#12bfa4" position={0.95}>
            <About/>
        </Transition>
        <Transition height="100vh" from="#12bfa4" to="#003C15" position={0.95}>
          <Review/>
        </Transition>
        <Transition height="100vh" from="#003C15" to="#CC1C05" position={0.95}>
          <Projects/>
        </Transition>
        <Transition height="100vh" from="#CC1C05" to="#F9C809" position={0.95}>
          <Contact/>
        </Transition>

      </AnimatedBg>


      </div>
    );
  }
}

export default App;
