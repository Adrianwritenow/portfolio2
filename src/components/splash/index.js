import React, { Component } from 'react';
import '../../App.css';



class Splash extends Component {


  render() {
    const backgroundR = {
      backgroundImage: 'url(images/tigerCopy.png)'
    }
    const backgroundL = {
      backgroundImage: 'url(images/roughSeas.jpeg)'
    }


    return (
      <section>
        <div className="splashWrapper wrapper">
          <div className='mask'>
            <div className="leftSplash" style={backgroundL}>
              <svg >
                <line x1="0" y1="100%" x2="100%" y2="0"/>
              </svg>
            </div>
          </div>
          <div className="splashText">
            <div className='leftBlock'>
              <h1 className="blockText">UI/UX</h1>
            </div>
            <div className='rightBlock'>
              <h1 className="blockText">DEV</h1>
            </div>
        </div>

        <div className="rightSplash"></div>
        </div>
      </section>
    );
  }
}

export default Splash;
