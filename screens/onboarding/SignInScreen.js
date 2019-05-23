import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Text, Container, Content, Form, Item, Input, Label, Button,
} from 'native-base';

import auth from '../../lib/auth-services'


export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    // header: null,
    title: 'Sign in'
  };


  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(username) => this.setState({ username })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
            </Item>
            <Text> </Text>
            <Button block info onPress={this.addUser}>
              <Text>Signup</Text>
            </Button>
            <Text> </Text>
            <Button block info onPress={() => auth.logout()}>
              <Text>Logout</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}













