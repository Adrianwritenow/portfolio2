import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';

import '../../App.css';



class Projects extends Component {


  render() {
    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    }



    return (
      <section>
        <div className="projectWrapper" >
          <div className='projectMask'>
            <div className='demoView'>
              <img src='images/Real.png' alt='demo'/>
            </div>
            <div className="contentWrapper">
              <div className='blocText'>
                <h1><span>let</span>Foxtail</h1>
                <h1>Coffee</h1>
                <span className='equal'><p>&#61;</p></span>


              </div>


                <p>
                  <span>&#123;</span>

                  <span className='boldTxt'>Year:</span>2018,<br/>
                  <span className='boldTxt'>Job:</span>UI/UX,<br/>
                  <span className='boldTxt'>Site:</span>foxtailcoffee.com,<br/>
                  <span className='boldTxt'>Used:&#91;</span> .html,.css,.js
                  <span className='boldTxt'>&#93;</span>
                  <span>&#125;</span>
                </p>

            </div>
          </div>

        </div>

      </section>
    );
  }
}

export default Projects;
