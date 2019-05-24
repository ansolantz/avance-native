import React, { Component } from 'react';

import {
  Text, Container, Content, H1, Button
} from 'native-base';


export default class SplashScreen extends Component {

  render() {
    return (
      <Container>
        <Content>
          <H1>SplashScreen </H1>

          <Button block info onPress={() => this.props.navigation.navigate('SignupScreen')}>
            <Text>Get started</Text>
          </Button>
          <Text> </Text>
          <Button block info onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}













