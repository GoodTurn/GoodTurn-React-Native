import React, { Component } from 'react';
import { Text,
  TextInput,
  TouchableOpacity,
  View } from 'react-native';
import { connect } from 'react-redux';
import { logItIn, loginAction, signUpAction } from '../actions/action_login.js';







class LoginForm extends Component {
  state = { email: '', password: '', firstName: '', lastName: '', error: '', signup: false };


  signUp = () => {
    this.setState({error: ''})
    const badValidation = this.validateSignUp(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
    if (badValidation) {
      this.setState({error: badValidation})
    } else {
      this.props.loginAction();
      const values = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }
      this.props.signUpAction(values);
    }
  }

  validateSignUp = (firstName, lastName, email, password) => {
    const fields = [firstName, lastName, email, password];
    let encoded = '';
    for (var i = 0; i < fields.length; i++) {
      if (fields[i] === "") {
        return 'Please do not leave fields blank';
      }
      encoded = encodeURI(fields[i]);
      if (fields[i] !== encoded) {
        for (var j = 0; j < fields[i].length; j++) {
          if (fields[i][j] !== encoded[j]) {
            return `Invalid character ${fields[i][j]}`;
          }
        }
      }
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)) {
      return 'Please enter a valid email';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    return false;
  }


  login = () => {
    this.setState({error: ''})
    const badValidation = this.validateLogin(this.state.email, this.state.password)
    if (badValidation) {
      this.setState({error: badValidation})
    } else {
      this.props.loginAction();
      this.props.logItIn(this.state.email, this.state.password);
    }
  }

  validateLogin = (email, password) => {
    const fields = [email, password];
    let encoded = '';
    for (var i = 0; i < fields.length; i++) {
      if (fields[i] === "") {
        return 'Please do not leave fields blank';
      }
      encoded = encodeURI(fields[i]);
      if (fields[i] !== encoded) {
        for (var j = 0; j < fields[i].length; j++) {
          if (fields[i][j] !== encoded[j]) {
            return `Invalid character ${fields[i][j]}`;
          }
        }
      }
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)) {
      return 'Please enter a valid email';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    return false;
  }



  loginSwitch = () => {
    this.setState({ signup: !this.state.signup })
  }



  render() {
    const renderInput = ({ input: { onChange, ...restInput }, placeholder, secureTextEntry }) => {
      return <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
        placeholder={placeholder} />
    }

    if (this.state.signup) {
      return (
        <View style={styles.container}>
          <Text style={styles.intro}>Sign up to connect with those closest to you...literally!</Text>
          <Text style={styles.intro}>It's free.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChangeText={firstName => this.setState({ firstName })} />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })} />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })} />
            <TextInput
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })} />
          </View>
          <Text style={styles.error}>
            {this.state.error}
            {this.props.login.message}
          </Text>
          <TouchableOpacity style={styles.button} onPress={this.signUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>Have an account?</Text>
            <Text
              style={styles.bottomTextSwitch}
              onPress={this.loginSwitch}
            >Log In</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })} />
            <TextInput
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })} />
          </View>
          <Text style={styles.error}>
            {this.state.error}
            {this.props.login.message}
          </Text>
          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>Don't have an account?</Text>
            <Text
              style={styles.bottomTextSwitch}
              onPress={this.loginSwitch}
            >Sign Up</Text>
          </View>
        </View>
      )
    }
  }
}


const styles = {
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'space-between'
  },
  intro: {
    color: '#777',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: 'bold',
    margin: 10
  },
  inputContainer: {
    paddingTop: 5,
    paddingBottom: 10
  },
  input: {
    color: '#777',
    padding: 5,
    marginVertical: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 33,
    borderColor: '#d1cbc7',
    borderWidth: 1,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#81A8CD',
    paddingVertical: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 23
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  bottomText: {
    color: '#777',
    paddingRight: 5
  },
  bottomTextSwitch: {
    color: '#ff8355',
  },
  error: {
    color: 'red'
  }
};

function mapStateToProps(store) {
  return {
    login: store.login,
    appActivated: store.appActivated
  };
}

LoginForm =  connect(mapStateToProps, { loginAction, signUpAction, logItIn })(LoginForm);

export default LoginForm;
