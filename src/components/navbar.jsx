import React, { Component } from 'react';

class NavBar extends Component {
    
    render() { 
        return (  
            <nav className="navbar navbar-light bg-light">

                <a className="navbar-brand" href="#">
                    My Navbar <span>{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}
 
export default NavBar;