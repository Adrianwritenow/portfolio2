import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';

import '../../App.css';




class About extends Component {


  render() {
    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    }



    return (
      <section>


          <div className="aboutWrapper">
          <div className='projectBg' style={background}></div>

            <div className='aboutMask'>
              <div className="contentWrapper">
                <div className='blocText'>
                  <h1>I desgin and build &#123;apps&#125;</h1>
                </div>
                  <p>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam,quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute
                   irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur</p>

              </div>
            </div>

          </div>
      </section>
    );
  }
}

export default About;
