
import React from 'react'
import firebase from 'firebase';
//import app from 'firebase/app';
import 'firebase/auth';
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
    }
   }

   doCreateUserWithEmailAndPassword(email,password) {
       this.auth.createUserWithEmailAndPassword(email,password).then(function(){
        window.location.href='signin';
      }).catch(function(error) {
        var errorMessage = error.message;
        
        var errorElement = document.getElementById('error');
        errorElement.setAttribute('style','color:red;');
        errorElement.innerText = errorMessage;
      });
    }

  render() { 
      return null; 
  }

  //Auth methods
 /* doSignInWithEmailAndPassword = (email,password) =>
    this.auth.signInUserWithEmailAndPassword(email,password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => 
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password);
*/
}
