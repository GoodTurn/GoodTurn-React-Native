import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import Header from './common/Header';
import Card from './common/Card';
import Footer from './common/Footer';
import LoginForm from './LoginForm';

const Login = () => (
  <View style={styles.bodyStyle} >
    <Header>
      <Image style={styles.imageStyle} source={require('../pics/GoodTurnWhite.png')} />
    </Header>
    <ScrollView>
      <Card>
        <LoginForm />
      </Card>
    </ScrollView>
    <Footer />
  </View>
);


const styles = {
  bodyStyle: {
    backgroundColor: '#F2EEEB',
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 35,
    width: 170,
    marginVertical: 10,
  },
};

export default Login;
