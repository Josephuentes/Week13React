import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar">
            <div>
                <a className="navbar-brand" href="/Home" disabled>Home</a>
                <a className="navbar-brand" href="/About" disabled>About</a>
                <a className="navbar-brand" href="/Contact" disabled>Contact</a>
            </div>
      </nav>
      
    )
  }
}
