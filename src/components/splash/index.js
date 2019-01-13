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
        <div className="splashWrapper">
          <div className="leftSplash" style={backgroundL}>

          <svg >
            <line x1="0" y1="100%" x2="100%" y2="0"/>
          </svg>

            <div className='textWrapper'>
              <div className='leftText'>
                <h1 className='headerText'>UI/UX</h1>
              </div>

              <div className='rightText'>
                <h1 className='headerText'>DEV</h1>
              </div>

            </div>



          </div>
          <div className="rightSplash" style={backgroundR}>
          </div>

        </div>

      </section>
    );
  }
}

export default Splash;
