import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: '#fffdfb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 5,
    padding: 5
  }
}

export default Card;
