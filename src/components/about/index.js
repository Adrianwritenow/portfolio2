import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import {about} from '../../containers/about.js';
import { Carousel } from 'react-bootstrap';



import '../../App.css';




class About extends Component {

  constructor(props, context) {
    super(props, context);

    this.aboutWrap = this.aboutWrap.bind(this);

    this.state = {
      index: 0,
      direction: null,
      about: about[0]
    };
  }

  aboutWrap(selectedIndex) {

  }

  componentDidMount(){
    // setInterval(this.aboutWrap, 2000);
    // store intervalId in the state so it can be accessed later:
  }






  render() {
    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    }

    const { index, direction } = this.state;

    let aboutState = this.state.about ;
    console.log('?',aboutState);



    return (
      <section className='pageSection'>


          <div className="aboutWrapper">
          <div className='projectBg' style={background}></div>

            <div className='aboutMask'>
              <div className="contentWrapper">
                <div className='blocText'>
                  <h1>I desgin and build &#123;

                    {aboutState.skill}
                    &#125;

                </h1>
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
