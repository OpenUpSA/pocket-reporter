
import React from 'react'
import firebase from 'firebase'; 
import 'firebase/auth';
import 'firebase/database';
import { renderComponent } from 'recompose';

const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID
};

export class Firebase extends React.Component {
  constructor() {
    super();
  
    if (!firebase.apps.length) {
      firebase.initializeApp(config);

      this.auth = firebase.auth();

      this.doCreateUserWithEmailAndPassword = this.doCreateUserWithEmailAndPassword.bind(this);
      this.doSignInWithEmailAndPassword = this.doSignInWithEmailAndPassword.bind(this);
      this.doFacebookAuthentication = this.doFacebookAuthentication.bind(this);
      this.doGoogleAuthentication = this.doGoogleAuthentication.bind(this);
      this.doTwitterAuthentication = this.doTwitterAuthentication.bind(this);
      this.doProviderLogin = this.doProviderLogin.bind(this);

      this.doPUT = this.doPUT.bind(this);
      this.doGET = this.doGET.bind(this);
    }
   }

   doCreateUserWithEmailAndPassword(email,password) {
      var errorElement = document.getElementById('error');
      errorElement.innerText = '';

        this.auth.createUserWithEmailAndPassword(email,password).then(function(){
        
        window.location.href = 'signin';
      }).catch(function(error) {
        var errorMessage = error.message;

        errorElement.setAttribute('style','color:red;');
        errorElement.innerText = errorMessage;
      });
    }

    doSignInWithEmailAndPassword(email,password){
      var errorElement = document.getElementById('error');
      errorElement.innerText = '';

        this.auth.signInWithEmailAndPassword(email,password).then(function(){
        
        window.location.href = '/';
      }).catch(function(error) {
        var errorMessage = error.message;

        errorElement.setAttribute('style','color:red;');
        errorElement.innerText = errorMessage;
      });
    }

    doFacebookAuthentication() {
      var provider = new firebase.auth.FacebookAuthProvider();
      this.auth.useDeviceLanguage();

      this.doProviderLogin(provider);
    }

    doGoogleAuthentication() {
      var provider = new firebase.auth.GoogleAuthProvider();
      this.auth.useDeviceLanguage();

      this.doProviderLogin(provider);
    }

    doTwitterAuthentication() {
      var provider = new firebase.auth.TwitterAuthProvider();
      this.auth.useDeviceLanguage();

      this.doProviderLogin(provider);
    }

    doPUT(data,story) { 
      var uuid = sessionStorage.getItem('uuid');
      var user = sessionStorage.getItem('uname');
      var email = sessionStorage.getItem('uemail');

      var path = uuid + '/' + story;
      
      var jsonData = { 
         'uuid': uuid,
         'displayname': user,
         'email': email,
         'data': encodeURIComponent(data)
      };

      firebase.database().ref(path).set({
        data: jsonData
      }).catch(function(error) {
        var errorMessage = error.message;

        throw new Error(errorMessage);
      });
    }

    doGET(story) {
      var uuid = sessionStorage.getItem('uuid');
      var user = sessionStorage.getItem('uname');
      var email = sessionStorage.getItem('uemail');

      var path = uuid  + '/' + story;

      var json = '';

      firebase.database().ref(path).on('value', function(snapshot) {
        sessionStorage.setItem('querySnapshot',JSON.stringify(snapshot.val()));
      });

      return sessionStorage.getItem('querySnapshot');
    }

    doProviderLogin(provider){
      var errorElement = document.getElementById('error');
      errorElement.innerText = '';

      this.auth.signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

         sessionStorage.setItem('uuid',user.uid);
         sessionStorage.setItem('uname',user.displayName);
         sessionStorage.setItem('uemail',user.email);

         //window.location.href="/";
         
      }).catch(function(error) {
        var errorMessage = error.message;

        errorElement.setAttribute('style','color:red;');
        errorElement.innerText = errorMessage;
      });
    }

  render() { 
      return null; 
  }
}
