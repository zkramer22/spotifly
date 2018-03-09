import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  return (
    <div className="splash-flexbox">
      <div className="greeting-BLACKround">
        <img
          className="greeting-background"
          src="https://images2.alphacoders.com/267/267922.jpg"
          alt="picNotHere"/>
      </div>

      <div className="greeting-cont">
        <div className="main-logo">
          <h2>Spotifly</h2>
        </div>
        <Link className="signup-link" to='/signup'>Signup</Link>
        <div id="account-question">-- ALREADY HAVE AN ACCOUNT? --</div>
        <Link className="login-link" to='/login'>Login</Link>
      </div>

      <div className="welcome-message">
        <h1>Music takes flight.</h1>
        <h3>Listen to zillions of songs for free.</h3>
        <br></br>
        <ul className="welcome-bullets">
          <li><strong>&#10003;</strong> Search & discover music anytime, anywhere</li>
          <li><strong>&#10003;</strong> Create playlists of your favorites</li>
        </ul>
      </div>
    </div>
  );
};

export default Greeting;

/* TODO: Here is the logic for currentUser being logged in.
          Not sure if this is necessary anymore */
/*
  currentUser ? (
    <div>
      <h2>Hello, {currentUser.email_address}</h2>
      <button onClick={ logout }>Logout</button>
    </div>
  ) : ( */
