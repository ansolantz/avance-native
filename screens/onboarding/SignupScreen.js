import React, { Component } from 'react';
import { Alert } from 'react-native';
import {
  Text, Container, Content, Form, Item, Input, Icon, Label, Button, H1, H2, H3, Header, Left, Right, Body, Title
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
    header: null,
    //title: 'Signup'
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
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Signup</Title>
          </Body>
          <Right />
        </Header>


        <Content padder style={{marginTop:10}}>
    
        <Text style={{margin:10}}>Welcome, please choose a username and password</Text>
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
           
            <Button style={{marginTop:40}} block primary onPress={this.addUser}>
              <Text>Signup</Text>
            </Button>
      

          </Form>
        </Content>
      </Container>
    );
  }
}













