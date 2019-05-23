import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Text, Container, Content, Form, Item, Input, Label, Button,
} from 'native-base';
import auth from '../../lib/auth-services'

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    // header: null,
    title: 'Signup'
  };

  showError = () => {
    Alert.alert(
      'Alert Title',
      'Error creating user',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

  }


  addUser = () => {
    console.log('ADD USER!')
    console.log(this.state)
    const { username, password } = this.state;
    // try {
    auth.signup({ username, password })
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













