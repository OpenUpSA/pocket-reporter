import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import { compose } from 'recompose';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Button from '@material-ui/core/Button';


import { SignUpLink } from './signup';
import { withFirebase } from '../components/Firebase';
import {Firebase} from '../components/Firebase/firebase';
import { red } from '@material-ui/core/colors';

const SigninWrapper = styled.div`
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
const SigninText = styled.p`
  font-size: 14px;
`;

const SigninButton = styled(Button)`
  width: 100%;
  && {
    margin-bottom: 5px;
    text-transform: none;
  }
`;

const SigninLink = styled.a`
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

const twitterIconStyle = {
  color: '#38A1F3',
  cursor: 'pointer'
};

const facebookIconStyle = {
 color : '#3b5998',
 cursor: 'pointer'
};

const googleIconStyle = {
  color : '#DB4437',
  cursor: 'pointer'
 };

const SignInPage = () => (
  <div>
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
    <React.Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Helmet>
    
    <Header signin/>

      <SigninWrapper>
      <br/>
      <span id="error"></span><br/>
      <br/><br/>
      <form onSubmit={this.onSubmit}>
       <Firebase ref={el => this.child = el}/>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          style={textBoxStyle}
        /><br/>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          style={textBoxStyle}
        /><br/><br/>
         <SigninButton variant="contained" color="primary" disabled={isInvalid} onClick={this.onSubmit}>
          Sign In
        </SigninButton>
        <br/><br/>
       <SigninText> Don't have an account? <SigninLink href="signup">Sign Up</SigninLink> or login with:</SigninText><br/>
       <center>
        <FontAwesomeIcon icon={faFacebook} style={facebookIconStyle} onClick={this.onFacebookSubmit}/>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faGoogle} onClick={this.onGoogleSubmit} style={googleIconStyle}/>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faTwitter} onClick={this.onTwitterSubmit} style={twitterIconStyle}/>&nbsp;&nbsp;
       </center>
      </form>
      </SigninWrapper>

      <Footer />
      
      </React.Fragment>
    );
  }
}

const SignInForm = compose(
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };