import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Text, Container, Content, Form, Item, Input, Label, Button, H2, Icon, Header, Body, Left, Right, Title
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
    header: null,
    //title: 'Login'
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
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{marginTop:10}}>
    
      
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
            <Button style={{marginTop:40}} block primary onPress={this.handleSignInUser}>
              <Text>Login</Text>
            </Button>


          </Form>
        </Content>
      </Container>
    );
  }
}













