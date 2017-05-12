import React, { Component } from 'react';
import { View, Image } from 'react-native';

const Header = (props) => {

  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  )
}


const styles = {
  viewStyle: {
    backgroundColor: '#81A8CD',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export default Header;
