import React, {Component} from 'react';
import Header from '../Header/Header';


class AboutView extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello AboutView</h1>
        <p>This about page is for anyone to read!</p>
      </div>
    );
  }
}


export default AboutView;
