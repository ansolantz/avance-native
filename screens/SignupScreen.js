import React, { Component } from 'react';
import {
  Text, Container, Content, Form, Item, Input, Label, Button,
} from 'native-base';

import auth from '../lib/auth-services'
import axios from 'axios';

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: '****'
    };
  }

  static navigationOptions = {
    // header: null,
    title: 'Signup'
  };

  addUser = () => {
    console.log('ADD USER!')
    console.log(this.state)
    const { username, password } = this.state;
    auth.signup({ username, password });
    //auth.updateUser({ username, password });
    this.props.navigation.navigate('Dashboard')

  }

  updateUser = () => {
    console.log('UPPDATE USER')

    //Home
    axios.put('http://192.168.1.118:5000/user/update/5ce3f2262c5b7d66e98f2def', {
      displayName: 'Ansoooo22222',
      email: 'anso@test.com2222333'
    })
    //axios.put('http://192.168.65.215:5000/user/update/5ce3f2262c5b7d66e98f2def', {

    //Phone

    // axios.get('http://exaple.com')
    //   // axios.put('http://172.20.10.3:5000/user/update/5ce3f2262c5b7d66e98f2def', {
    //   //   displayName: 'Ansoooo22222',
    //   //   email: 'anso@test.com2222'
    //   // })
    //   .then(res => console.log(res.data))
    //   .catch((err) => console.log(err));

    this.props.navigation.navigate('Dashboard')

  }
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
              <Input onChangeText={(password) => this.setState({ password })} />
            </Item>

            <Button block info onPress={this.addUser}>
              <Text>Signup</Text>
            </Button>

            <Button block info onPress={() => auth.logout()}>
              <Text>Logout</Text>
            </Button>




          </Form>
        </Content>
      </Container>
    );
  }
}













