import logo from './logo.png';
import React from 'react';
import ReactDOM from 'react-dom';

function Project1(){
  return (
    <div>
      <img src={logo} width='40' alt="logo" />
      <h1>Fun facts about react</h1>
      <ul>
        <li>Was released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k in Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including <br />mobile apps</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<Project1 />, document.getElementById('root'))