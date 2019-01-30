import React, { Component } from 'react';
import { RootNavigator } from "./config/navigation";
import { isSignedIn } from "./auth";
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
	SplashScreen.show();
    isSignedIn()
      .then(response => this.setState({ signedIn: response, checkedSignIn: true }))
      .catch(error => alert("Oops! Something broked"));
	  
  }
  componentDidMount() {
        
		 setTimeout(() => {
     SplashScreen.hide();
    }, 5000);
  }


  render() {
    const { checkedSignIn, signedIn } = this.state;
    const Layout = RootNavigator(signedIn);
    if(checkedSignIn){
      return(
        <Layout />
      );
    }else{
      return null;
    }
  }
}