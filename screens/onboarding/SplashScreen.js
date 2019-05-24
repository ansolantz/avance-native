import React, { Component } from 'react';

import {
  Text, Container, Content, H1, Button, Image, Card, CardItem, Thumbnail, Icon
} from 'native-base';


export default class SplashScreen extends Component {

  render() {
    return (

      <Container style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Content>
          <H1>SplashScreen </H1>
          <Text></Text>
          <Card>
            <CardItem>
              <Text>Welcome</Text>
              <Text note>Test..</Text>
            </CardItem>
            <CardItem>
              <Thumbnail large source={require('../../assets/images/test-logo.png')} />
              {/* <Image style={{ resizeMode: 'cover' }} source={require('../../assets/images/test-logo.png')} />  */}

            </CardItem>

            <CardItem>
              <Button info onPress={() => this.props.navigation.navigate('SignupScreen')}>
                <Text>Get started</Text>
              </Button>
              <Text> </Text>
              <Button info onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text>Login</Text>
              </Button>
            </CardItem>

          </Card>
        </Content>
      </Container>

    );
  }
}













