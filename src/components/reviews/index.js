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
          <div className='reviewMask'>
          </div>
        </div>

      </section>
    );
  }
}

export default Review;
