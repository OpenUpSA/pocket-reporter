import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import  {FirebaseContext } from '../components/Firebase';
import {Firebase} from '../components/Firebase/firebase';
import { compose } from 'recompose';

import { withFirebase } from '../components/Firebase';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.sleep = this.sleep.bind(this);
  }

  sleep(milliseconds){
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    var errorElement = document.getElementById('error');
    errorElement.innerText = '';

    const { username, email, passwordOne } = this.state;

    this.child.doCreateUserWithEmailAndPassword(email, passwordOne)

    /*var firebaseState = sessionStorage.getItem('firebaseState');

    if(firebaseState == '200'){
      window.location.href='signin';
    }
    else {
      errorElement.setAttribute('style','color:red;');
      errorElement.innerText = firebaseState;
    }*/

    event.preventDefault();
  }

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
  
      const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    return (
      <form onSubmit={this.onSubmit}>
      <Firebase ref={el => this.child = el}/>
      <span id="error"></span><br/><br/>
      <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <br/>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <br/>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <br/>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <br/>
        <button disabled={isInvalid} type="button" onClick={this.onSubmit}>
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <a href='signup'>Sign Up</a>
  </p>
);

const SignUpForm = compose(
  withFirebase,
)(SignUpFormBase);


export default SignUpPage;

export { SignUpForm, SignUpLink };