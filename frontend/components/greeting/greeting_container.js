import Greeting from './greeting';
import { login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    guestLogin: () => dispatch(login({ email_address: "userB", password: "asdfgh" })),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
