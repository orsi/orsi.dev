import React, { Component } from 'react';
import './home.component.css';

import Splash from '../../components/splash.component.js';

class HomeViewComponent extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="home-view">
        <Splash />
      </div>
    );
  }
}

export default HomeViewComponent;
