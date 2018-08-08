import React, { Component } from 'react';
import { Navbar,Nav,NavItem} from 'react-bootstrap';
import './TopBar.css';

class TopBar extends Component {
  render() {

      return (
      <div className= "topbar">
          <a className="topbar-logo" href="#">
              <span className="topbar-logo-img-cont">
                  <img src="./assets/logo/logo.png" />
              </span>
            </a>
      </div>

    );
  }
}


export default TopBar;
