import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo">
            Emailer
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="">Login with Google</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
