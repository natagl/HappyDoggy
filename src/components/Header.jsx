import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { paw } from 'react-icons-kit/fa/paw'
import { u1F429 } from 'react-icons-kit/noto_emoji_regular/u1F429'
import { glass } from "react-icons-kit/iconic/glass";
import { paperclip } from "react-icons-kit/iconic/paperclip";
import { profile } from "react-icons-kit/icomoon/profile";




class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navWrapper">
          <div className="navIcon">
            <div className='nav1'>
              <Link to="/pets">
                <Icon className="iconButton" size={40} icon={u1F429} />
              </Link>
              <p className="p1">Pets</p>
              <br />
            </div>
            <div className='nav1'>
              < Link to="/find">
                <Icon className="iconButton3" size={25} icon={glass} />
              </Link>
              <p className="p1">Help Me Find</p>
              <br />
            </div>
            <div className='nav1'>
              <Link className="iconHome" to="/">
                <Icon className="iconButton2" size={45} icon={paw} />
              </Link>
              <br />
            </div>
            <div className='nav1'>
              <Link to="/new">
                <Icon className="iconButton1" size={25} icon={paperclip} />
              </Link>
              <p className="p1">Donate Pet</p>
              <br />
            </div>
            <div className='nav1'>
              <Link to="/organizations">
                <Icon className="iconButton5" size={25} icon={profile} />
              </Link>
              <p className="p1">Organizations</p>
              <br />
            </div>
          </div>
        </nav>
      </div >
    );
  }
}

export default Header;
