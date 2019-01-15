import React, { Component } from 'react';
import '../../App.css';



class Splash extends Component {


  render() {
    const backgroundR = {
      backgroundImage: 'url(images/tigerBG.png)'
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
                <div className='uiSubTxt'>
                  <h4>USER TEST</h4>
                  <h4>SKETCH</h4>
                  <h4>HTML</h4>
                  <h4>SASS</h4>
                  <h4>CSS</h4>
                </div>
              </div>

              <div className='devSubTxt'>
                <h4>JS</h4>
                <h4>GIT</h4>
                <h4>PSQL</h4>
                <h4>NODE</h4>
                <h4>REACT</h4>
                <h4>REDUX</h4>
                <h4>EXPRESS</h4>
                <h4>MONGO.DB</h4>
              </div>

              <div className='rightText'>
                <h1 className='headerText'>DEV</h1>
              </div>

            </div>



          </div>
          <div className="rightSplash" style={backgroundR}>
            <div className='titleCard'>
              <h4>ADRIANWRITENOW.COM</h4>
            </div>
          </div>

        </div>

      </section>
    );
  }
}

export default Splash;
