import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  state = {};
  render() {
    return (
     <div>
     <nav className="blue darken-3">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Meetups</a>
      <a href="/" data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
      <ul id="" className="right hide-on-small-only">
        <li><Link to="/"> <i className="fa fa-users"></i> Meetups</Link></li>
        <li><Link to="/about"> <i className="fa fa-book"></i> About</Link></li>
      </ul>
      <ul className="side-nav" id="main-menu">
        <li><Link to="/"> <i className="fa fa-users"></i> Meetups</Link></li>
        <li><Link to="/meetups/add"> <i className="fa fa-plus"></i> Add Meetup</Link></li>
      </ul>
    </div>
  </nav>
     </div>   
    );
  }
}
