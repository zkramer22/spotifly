import React from 'react';
import { Link } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_address: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateEmail(e) {
    this.setState({ email_address: e.currentTarget.value });
  }

  updatePassword(e) {
    this.setState({ password: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const guestLogin = this.props.formType === "login" ? (
      <span
        id="guest-login"
        onClick={ () => this.props.guestLogin() }>Guest Login
      </span>
    ) : (
      <span></span>
    );

    return (
      <div className="splash-flexbox">

        <div className="BLACKround">
          <div className="greeting-background">
          </div>
        </div>

        <form id="greeting-cont"
          className="greeting-cont"
          onSubmit={ this.handleSubmit }
          >
          <div className="main-logo">
            <img id="spotiFLY-logo"
              src="/assets/bird-flight-silhouette.png"/>
            <h2>Spotifly</h2>
          </div>

          <div className="errors">
            { this.renderErrors() }
          </div>
          <input
            type="text"
            value={ this.state.email_address }
            onChange={ this.updateEmail }
            placeholder="email address"
            autoFocus="autofocus"/>

          <input
            type="password"
            value={ this.state.password }
            onChange={ this.updatePassword }
            placeholder="password"/>

          <input
            id="submit-button"
            type="submit"
            value={ this.props.formType } />

          <p>or <strong id="session-link">{ this.props.navLink }</strong></p>

          { guestLogin }

        </form>

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
  }
}

export default withRouter(SessionForm);
