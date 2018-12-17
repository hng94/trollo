import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import FaUserSecret from "react-icons/lib/fa/user-secret";
import {IoIosContact} from "react-icons/io";
// import FaSignIn from "react-icons/lib/fa/sign-in";
// import kanbanLogo from "../../../assets/images/kanban-logo.svg";
import logo from "../fh-kiel.png";
import "./Header.scss";

class Header extends Component {
  static propTypes = { user: PropTypes.object };
  signOut = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }
  render = () => {
    const { user } = this.props;
    return (
      <header>
        <Link to="/" className="header-title">
          <img src={logo} alt="fh kiel logo" />
          &nbsp;Trollo
        </Link>
        <div className="header-right-side">
          {user.name}
          <a className="signout-link" onClick={()=>{this.signOut()}}>
            Sign out
          </a>
        </div>
      </header>
    );
  };
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
