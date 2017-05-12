import React from 'react';
import { View, Text, Image } from 'react-native';


const SingleProfileSpec = (props) => {
    return (
      <View style={styles.containerStyle6}>
        <Image style={styles.imageStyle2} source={{uri: props.path}} />
        <Text style={styles.textSpec}>{props.spec.value}</Text>
      </View>
    )
}

const styles = {
  textSpec: {
    color: '#aaa',
    fontSize: 12,
    marginLeft: 15,
    justifyContent: 'flex-end'
  },
  containerStyle6: {
    flexDirection: 'row',
    marginVertical: 5
  },
  imageStyle2: {
    height: 15,
    width: 15
  }
}

export default SingleProfileSpec;
