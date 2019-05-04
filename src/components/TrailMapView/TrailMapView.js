import React, {Component} from 'react';
import './TrailMapView.css';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

class TrailMapView extends Component {
  render() {
    return (
      <div className="TrailMapView-wrapper">
        <Header header="TRAIL MAP" />
        <Navbar currentView="TRAIL MAP" />
        <div className="img-window" >
          <img src="./trail-map.png" alt="trail map of Oakdale Nature Preserve" ></img>
        </div>
      </div>
    );
  }
}

export default TrailMapView;