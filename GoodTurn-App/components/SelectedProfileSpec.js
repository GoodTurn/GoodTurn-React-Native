import React from 'react';
import { View, Text, Image } from 'react-native';


const SelectedProfileSpec = (props) => {
    return (
      <View style={styles.containerStyle6}>
        <Image style={styles.imageStyle3} source={{uri: props.path}} />
        <View style={styles.padding}>
          <Text style={styles.textSpec}>{props.spec.value}</Text>
        </View>
      </View>
    )
}

const styles = {
  textSpec: {
    color: '#aaa',
    fontSize: 14
  },
  containerStyle6: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10
  },
  imageStyle3: {
    height: 18,
    width: 18,
    marginRight: 15
  },
  padding: {
    alignSelf: 'stretch',
    paddingRight: 32
  }
}

export default SelectedProfileSpec;
