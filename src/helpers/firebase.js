import React, { Component } from 'react'
import firebase from "firebase";

import Firebase , { FirebaseContext } from '../components/Firebase'; 

export class FirebaseHelper extends React.Component {
    constructor() {
      this.pushData = this.syncData.bind(this);
      this.pullData = this.pullData.bind(this);
    }

    pushData(data,story){
       Firebase.doPUT(data,story);     
    }

    pullData(story){
      return Firebase.doGET(story);
    }

    render() { 
        return null; 
    }
}





