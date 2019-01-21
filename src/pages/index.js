import React from 'react'
import ReactDOM from 'react-dom';
import Axios from 'axios'

import LandingPage from '../views/LandingPage';

//Firebase config
Axios.get('/config/firebase.js')
  .then(function (response) {
      sessionStorage.setItem('firebaseConfig',response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

export default () => <LandingPage />


