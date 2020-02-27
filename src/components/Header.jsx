import React, { Component} from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { paw } from 'react-icons-kit/fa/paw'



class Header extends Component {
  render() {
    return (
      <div>
        <nav  className="navWrapper">
          <Link className="iconLink" to="/">
            <Icon className="iconButton" size={45} icon={paw} />
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
