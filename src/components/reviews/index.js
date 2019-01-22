import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';

import '../../App.css';



class Review extends Component {


  render() {
    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    }



    return (
      <section className='pageSection'>
        <div className="reviewWrapper" >
        <div className='projectBg' style={background}></div>

          <div className='reviewMask'>

          <div className='reviewBox all'>
            <p>Adrian was an outstanding student: eager to learn,
            always willing to help others, and responsive to constructive
             criticism. I would hire him for any junior developer
             position I had, especially if it was in front end engineering
              or Node. <br/><span>-Brian Gates<br/>Senior Software Developer
               at AgileThought</span>
            </p>
          </div>

          <div className='reviewBox remove'>
            <p>Adrian is awesome. Adrian came onto our team and made an
            impact right away. Not only is he a hard worker but he is
            creative and combining both of those makes him an amazing
            asset. He would bring his creative thoughts into the
            development of websites and he has the skills to make it
            happen through coding and his eye for design on the web.
            Adrian is the best.<br/><span>-Jordan Eichenblatt<br/>
            Founder and Partner at Orange Plane Creative</span></p>
          </div>



          </div>

        </div>


      </section>
    );
  }
}

export default Review;
