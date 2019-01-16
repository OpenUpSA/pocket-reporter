import React, { Component } from 'react';
import { compose } from 'recompose';

import { SignUpLink } from './signup';
import { withFirebase } from '../components/Firebase';
import {Firebase} from '../components/Firebase/firebase';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <span id="error"></span><br/>
    <SignInForm/>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.child.doSignInWithEmailAndPassword(email, password);
    
    event.preventDefault();
  };

  onFacebookSubmit = event => {
    this.child.doFacebookAuthentication();

    event.preventDefault();
  };

  onGoogleSubmit = event => {
    this.child.doGoogleAuthentication();

    event.preventDefault();
  };

  onTwitterSubmit = event => {
    this.child.doTwitterAuthentication();

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
       <Firebase ref={el => this.child = el}/>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        /><br/>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        /><br/>
        <button disabled={isInvalid} type="button" onClick={this.onSubmit}>
          Sign In
        </button> 
        <SignUpLink />
        Or login with:<br/>
       <button type="button" onClick={this.onFacebookSubmit}>Facebook</button>&nbsp;
       <button type="button" onClick={this.onGoogleSubmit}>Google</button>&nbsp;
       <button type="button" onClick={this.onTwitterSubmit}>Twitter</button>
      </form>
    );
  }
}

const SignInForm = compose(
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };