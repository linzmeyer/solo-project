import React, {Component} from 'react';
import './TrailMapView.css';
import Navbar from '../Navbar/Navbar';

class TrailMapView extends Component {
  render() {
    return (
      <div className="TrailMapView-wrapper">
        <Navbar currentView="TRAIL MAP" />
        <div className="img-window" >
          <div className="trail-map" >
        <img src="./trail-map.png" alt="..." ></img>
            {/* TRAIL MAP SHOULD RENDER HERE */}
          </div>
        </div>
        <Navbar currentView="TRAIL MAP" />
      </div>
    );
  }
}

export default TrailMapView;