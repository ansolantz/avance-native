import React, { Component } from 'react';
import {
  Text, Container, Content, Form, Item, Input, Label, Button
} from 'native-base';

import auth from '../lib/auth-services'
import axios from 'axios';

export default class MyAccountScreen extends Component {

  static navigationOptions = {
    // header: null,
    title: 'Uppdate User'
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
              <Input onChangeText={(password) => this.setState({ password })} />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input onChangeText={(email) => this.setState({ email })} />
            </Item>

            <Button block info onPress={this.addUser}>
              <Text>Edit</Text>
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



