import React from 'react';
import { View, Text } from 'react-native';


const SelectedProfileGTKY = (props) => {
    return (
        <View style={styles.containerStyle7}>
          <Text style={styles.textQ}>{props.question}</Text>
          <Text style={styles.textA}>{props.answer}</Text>
        </View>
    )
}

const styles = {
  containerStyle7: {
    marginVertical: 5,
    marginHorizontal: 10
  },
  textQ: {
    color: '#444',
    fontSize: 16,
    marginLeft: 20
  },
  textA: {
    color: '#aaa',
    fontSize: 16,
    marginLeft: 40
  }
}

export default SelectedProfileGTKY;
