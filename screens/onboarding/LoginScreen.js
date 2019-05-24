import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Text, Container, Content, Form, Item, Input, Label, Button, H2, Icon
} from 'native-base';

import auth from '../../lib/auth-services'


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    // header: null,
    title: 'Login'
  };

  handleSignInUser = () => {
    console.log('SIGNIN USER!')
    console.log(this.state)
    const { username, password } = this.state;
    // try {
    auth.login({ username, password })
      .then(() => {
        this.setState({ username: '', password: '' })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(err => console.log(err));

    // } catch (error) {
    //   this.showError();
    // }

  }

  render() {
    return (
      <Container>
        <Content>
          <Text>Enter your username and password to login</Text>
          <Form>
            <Item floatingLabel>
              <Icon name='ios-person' />
              <Label>Username</Label>
              <Input onChangeText={(username) => this.setState({ username })} />
            </Item>
            <Item floatingLabel last>
              <Icon name='ios-unlock' />
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
            </Item>
            <Text> </Text>
            <Button block info onPress={this.handleSignInUser}>
              <Text>Login</Text>
            </Button>


          </Form>
        </Content>
      </Container>
    );
  }
}













