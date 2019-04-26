import React, {Component} from 'react';
import './TrailMapView.css';
import Navbar from '../Navbar/Navbar';

class TrailMapView extends Component {
  render() {
    return (
      <div className="TrailMapView-wrapper">
        <div className="trail-map" >
        </div>
        <Navbar />
      </div>
    );
  }
}

export default TrailMapView;