import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import rp from 'request-promise';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const responseFacebook = (response) => {
      console.log(response);
      
      const options = {
        method: 'POST',
        uri: 'http://localhost:3003/api/customers/signin/facebook',
        body: {
          access_token: response.accessToken
        },
        json: true
      };
      
      rp(options)
        .then(data => {
          console.log('data response', data);
        })
        .then(error => {
          console.error('error response', error);
        });
    }
    
    return (
      <FacebookLogin
        appId="1546965822078013"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} />
    );
  }
}

export default App;
