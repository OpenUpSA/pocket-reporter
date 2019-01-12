import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID
};

class Firebase {
  construct() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  //Auth methods
  doCreateUserWithEmailAndPassword = (email,password) =>
    this.auth.createUserWithEmailAndPassword(email,password);

  doSignInWithEmailAndPassword = (email,password) =>
    this.auth.signInUserWithEmailAndPassword(email,password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => 
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;