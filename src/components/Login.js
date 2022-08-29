import React, { Component } from 'react'


export default class Login extends Component {
  render() {
    return (
        <div className='Loginform'>
            <h3>Log In</h3>
        <form >
            <label for="uname"></label>
            <input type="text" placeholder='Username'></input>
            <label for="uname"></label>
            <input type="text" placeholder='Password'></input>
            <button id='submitbutton' type="submit">Login</button>
        </form>
        </div>
    )
  }
}
