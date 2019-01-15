import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';

import '../../App.css';



class Review extends Component {


  render() {
    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    }



    return (
      <section>
        <div className="reviewWrapper" >
        <div className='projectBg' style={background}></div>

          <div className='reviewMask'>

          <div className='reviewBox'>
          </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Review;
