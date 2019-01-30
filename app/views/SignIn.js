import React, {Component} from "react";
import { View, ScrollView, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-elements";
import { onSignIn, setStorage } from "../auth";
import SplashScreen from 'react-native-splash-screen'

import t from 'tcomb-form-native';



const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
});

class Login extends Component {
	
	static navigationOptions = { header: null };
	
	
  constructor(props){
    super(props);
    this.state = {
      value: {
        username: '',
        password: ''
      }
    }
  }

  _handleSubmit = () => {
    const navigation = this.props.navigation;
    setStorage(true)
    onSignIn()
      .then(() => navigation.navigate("SignedIn"));
  }

  render() {
	 
    return(
    <ScrollView style={{backgroundColor: '#14D0FD'}}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <Form
            ref='form'
            type={User}
            value={this.state.value}
          />
          <Button
            large
            backgroundColor="#e58f19"
            textStyle={{ color: "#666" }}
            fontWeight="bold"
            raised={true}
            title="SIGN IN"
            onPress={this._handleSubmit}
          />
        </KeyboardAvoidingView>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
	backgroundColor: '#14D0FD',
  }
});

export default Login;

