import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';

import '../../App.css';



class Contact extends Component {


  render() {
    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    }



    return (
      <section className='pageSection'>
        <div className="contactWrapper" >
        <div className='projectBg' style={background}></div>

          <div className='contactMask'>
            <div className='leftSide'>

              <h1>hello?</h1>

              <p>Get in touch. We can make stuff or break stuff.</p>

              <p className="socialList">let <span>Social</span>&#61; &#91; , , , &#93; ;</p>

            </div>


            <div className='rightSide'>


              <form>
                <input placeholder="Name" type='text'/>
                <input placeholder="Email" type='text'/>
                <textarea placeholder="Comment" />

              </form>
            </div>




          </div>

        </div>


      </section>
    );
  }
}

export default Contact;
