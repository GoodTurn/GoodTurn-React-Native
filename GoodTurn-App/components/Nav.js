import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// components
import Footer from './common/Footer'

// Actions
import { logoutAction } from '../actions/action_login';
import { activate } from '../actions/action_feed';



class Nav extends Component {
  onLogout = () => {
    this.props.logoutAction();
    Actions.auth();
  }

  feedPress =() => {
    this.props.activate();
    Actions.main();
  }


  render() {
    return (
      <Footer>

        <TouchableWithoutFeedback onPress={() => Actions.profile()}>
          <Image
            style={styles.navImage1}
            source={require('../pics/profile_white.png')}
          />
        </TouchableWithoutFeedback>

        <View></View>

        <TouchableWithoutFeedback onPress={() => this.feedPress()}>
          <Image style={styles.navImage3} source={require('../pics/WhiteG.png')} />
        </TouchableWithoutFeedback>

        <View></View>

        <TouchableWithoutFeedback onPress={() => this.onLogout()}>
          <Image style={styles.navImage5} source={require('../pics/logout.png')} />
        </TouchableWithoutFeedback>

      </Footer>
    )
  }
}

const styles = {
  navImage1: {
    height: 30,
    width: 30
  },
  navImage3: {
    height: 35,
    width: 35
  },
  navImage5: {
    height: 25,
    width: 25
  }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutAction, activate }, dispatch);
}

export default connect(null, mapDispatchToProps)(Nav);
