import React, { Component } from 'react';
import { View } from 'react-native';

const Footer = (props) => {

  return (
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#81A8CD',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 45,
    position: 'relative'
  }
};

export default Footer;
