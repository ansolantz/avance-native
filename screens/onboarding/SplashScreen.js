import { BACKEND_URL } from 'react-native-dotenv'
import React, { Component } from 'react';

import { Text, Container, Content, H1, Button, Header, Title, Card, CardItem, Thumbnail, Icon, Left, Right, Body } from 'native-base';
import { StyleSheet, Image } from "react-native";


export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
    title: null
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>

          <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 60, color: '#777777' }}>avance</Text>
          <Image
            style={{ width: 250, height: 250 }}
            source={require('../../assets/images/logo-icon-transparent.png')}
          />

          <Button block primary onPress={() => this.props.navigation.navigate('SignupScreen')}>
            <Text>Get started!</Text>
          </Button>
          <Text> </Text>
          <Button block primary onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});









