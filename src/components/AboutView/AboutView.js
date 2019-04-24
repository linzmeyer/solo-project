import React, {Component} from 'react';
import Header from '../Header/Header';
import './AboutView.css';
import Nav from '../Nav/Nav';


class AboutView extends Component {
  render() {
    return (
      <div className="AboutView-wrapper">
        <Header header="About" />
        <Nav />
        <div className="card" >
          <h2>Your Mission</h2>
          <p>Incididunt fugiat ad est qui aliqua non eu qui et ut et laboris. Ullamco sit exercitation cupidatat enim commodo. Adipisicing eiusmod laboris dolor proident labore sint proident duis sint ad aliquip amet.</p>
        </div>
        <div className="card" >
          <h2>Your Reward</h2>
          <p>Aliqua excepteur duis labore exercitation commodo voluptate ipsum excepteur elit qui sit. Laborum nisi ut nisi ullamco exercitation id laborum aute do consequat. Sunt minim reprehenderit sunt aute commodo aute. Officia sunt qui anim Lorem duis pariatur dolor minim mollit laboris consectetur consequat.</p>
        </div>
        <div className="card" >
          <h2>About This App</h2>
          <p>Anim nulla cillum id proident proident sint voluptate do nisi in culpa et do ad. Amet voluptate nisi deserunt proident pariatur. In mollit magna qui fugiat eu. Sit fugiat labore aliqua irure tempor. Excepteur sunt enim nisi adipisicing. Esse minim laborum deserunt nostrud excepteur ipsum reprehenderit officia laboris laboris deserunt.</p>
        </div>
      </div>
    );
  }
}


export default AboutView;
