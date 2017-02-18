import React from 'react';

class NavBar extends React.Component {
  render(){
    return(
      <nav className="green" role="navigation">
        <div className="nav-wrapper">
          <a href="#">
            <img className="logo" src="http://www.lyngsoesystems.com/assets/img/lyngsoe_payoff.png" alt="Logo" />
          </a>

          <ul className="right hide-on-med-and-down">
            <li><a href="#">Navbar Link</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Navbar Link 1</a></li>
            <li><a href="#">Navbar Link 2</a></li>
            <li><a href="#">Navbar Link 3</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse right"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }
}

export default NavBar;
