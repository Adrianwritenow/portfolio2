import React, { Component } from 'react';
import { AnimatedBg, Transition } from 'scroll-background';
import { Carousel } from 'react-bootstrap';
import {projects} from '../../containers/projects.js';

import '../../App.css';



class Projects extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      projects: projects[0]
    };
  }

  handleSelect(selectedIndex, e) {
    console.log(this.state);
    console.log(e.direction);
    console.log(selectedIndex);




      this.setState({
        index: selectedIndex,
        projects: projects[selectedIndex]
      });

      console.log('newState',this.state);
  }




  render() {
    const { index, direction } = this.state;

    const background = {
      backgroundImage: 'url(images/pool_water.jpg)'
    };

    let stateProject = this.state.projects ;



    return (
      <section className='pageSection'>

        <div className="projectWrapper" >
        <div className='projectBg' style={background}></div>
          <div className='projectMask'>
            <Carousel
            activeIndex={index}
             direction={direction}
             onSelect={this.handleSelect}
            >
            <Carousel.Item>
              <div className='demoView'>
                <img src='images/Real.png' alt='demo'/>
              </div>
            </Carousel.Item>

            <Carousel.Item>


              <div className='demoView'>
                <img src='images/Real.png' alt='demo'/>
              </div>

            </Carousel.Item>
            </Carousel>



            <div className="contentWrapper">
              <div className='blocText'>
                <h1><span>let</span>{stateProject.firstName}</h1>
                <h1>{stateProject.lastName}</h1>
                <span className='equal'><p>&#61;</p></span>


              </div>


                <p>
                  <span>&#123;</span>

                  <span className='boldTxt'>Year:</span>{stateProject.year},<br/>
                  <span className='boldTxt'>Job:</span>{stateProject.job},<br/>
                  <span className='boldTxt'>Site:</span>{stateProject.site},<br/>
                  <span className='boldTxt'>Used:&#91;</span>.html,.css,.js
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
