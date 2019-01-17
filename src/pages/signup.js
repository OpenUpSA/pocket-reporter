import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import  {FirebaseContext } from '../components/Firebase';
import {Firebase} from '../components/Firebase/firebase';
import { compose } from 'recompose';

import { withFirebase } from '../components/Firebase';

import Button from '@material-ui/core/Button';

const SignupWrapper = styled.div`
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  top: 50px;
  font-size: 21px;
  overflow: scroll;
  height: calc(100vh - 100px);
  @media (min-width: 760px) 
  {
    width: 50%;
    margin: auto;
  }
`;
const Signupext = styled.p`
  font-size: 14px;
`;

const SignupButton = styled(Button)`
  width: 100%;
  && {
    margin-bottom: 5px;
    text-transform: none;
  }
`;

const SignupLink = styled.a`
  text-decoration: none;
  color: ##337ab7;
  font-size: 14px;
`;

const textBoxStyle = {
  width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  boxSizing: 'border-box'
};

const SignUpPage = () => (
  <div>
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
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.child.doCreateUserWithEmailAndPassword(email, passwordOne)

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
      
      <React.Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    
    <Header signup />

    <SignupWrapper>
      <br/>
      <span id="error"></span><br/>
      <form onSubmit={this.onSubmit}>
       <span id="error"></span><br/>
      <Firebase ref={el => this.child = el}/>
      <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          style={textBoxStyle}
        />
        <br/>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          style={textBoxStyle}
        />
        <br/>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          style={textBoxStyle}
        />
        <br/>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
          style={textBoxStyle}
        />
        <br/><br/>
        <SignupButton variant="contained" color="primary" disabled={isInvalid} onClick={this.onSubmit}>
          Sign Up
        </SignupButton>
      </form>
      </SignupWrapper>
      
      <Footer />

      </React.Fragment>
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