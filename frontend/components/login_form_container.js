import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
