import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Keyboard } from 'react-native';
import {
  Text, Container, Content, Form, Item, Input, Label, Button,
  List, ListItem, Left, Body, Right, Thumbnail, Header, Title, Icon
} from 'native-base';

import auth from '../lib/auth-services'

import { NativeViewGestureHandler } from 'react-native-gesture-handler';

export default class MyAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      displayName: '',
      email: '',
      url: '',
      age: '',
      weight: '',
      height: ''
    };

    // --- Listen to focus events
    // --- https://reactnavigation.org/docs/en/navigation-prop.html
    this.props.navigation.addListener(
      'willFocus', payload => {
        this.getUserData()
      }
    );

  }

  getUserData = () => {
    console.log('Getting user info')
    auth.getUser()
      .then(user => {
        console.log(user)
        this.setState({
          username: user.username,
          displayName: user.displayName,
          email: user.email,
          url: user.url,
          age: user.age,
          weight: user.weight,
          height: user.height
        });
      })
      .catch((err) => console.log(err))
  }

  handleUserEdit = () => {
    auth.editUser(this.state)
      .then(() => {
        //this.props.navigation.navigate('Dashboard')
        Keyboard.dismiss();
        this.forceUpdate();
      })
      .catch(err => console.log(err))

  }


  _signOutAsync = async () => {
    console.log("LOGOUT")
    auth.logout()
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.log(error);
    }
    this.props.navigation.navigate('Onboarding');
  };

  handleDeleteUser = () => {
    console.log("DELETE USER")
    this._signOutAsync();
    auth.deleteUser();
  }
  // static navigationOptions = {
  //   // header: null,
  //   title: 'Uppdate User'
  // };


  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Your Profile</Title>
          </Body>
          <Right>
            <Button onPress={() => this._signOutAsync()} hasText transparent>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
        <Content>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail large source={require('../assets/images/avatar.png')} />
              </Left>
              <Body>
                <Text>{this.state.username}</Text>
              </Body>
              <Right>
              </Right>
            </ListItem>
          </List>
          <Form>
            <Item floatingLabel last>
              <Label>Name</Label>
              <Input value={this.state.displayName}
                onChangeText={(displayName) => this.setState({ displayName })} />
            </Item>

            <Item floatingLabel last>
              <Label>Email</Label>
              <Input keyboardType='email-address' value={this.state.email}
                onChangeText={(email) => this.setState({ email })} />
            </Item>

            <Item floatingLabel last>
              <Label>Age</Label>
              <Input keyboardType='number-pad' value={this.state.age}
                onChangeText={(age) => this.setState({ age })} />
            </Item>

            <Item floatingLabel last>
              <Label>Wight (kg)</Label>
              <Input keyboardType='number-pad' value={this.state.weight}
                onChangeText={(weight) => this.setState({ weight })} />
            </Item>

            <Item floatingLabel last>
              <Label>Height (cm)</Label>
              <Input keyboardType='number-pad' value={this.state.height}
                onChangeText={(height) => this.setState({ height })} />
            </Item>
            <Text> </Text>
            <Button block info onPress={this.handleUserEdit}>
              <Text>Edit</Text>
            </Button>
            <Text> </Text>
            <Button block danger onPress={() => this.handleDeleteUser()}>
              <Icon name='ios-close-circle' />
              <Text>DELETE THIS USER</Text>
              <Icon name='ios-close-circle' />
            </Button>


          </Form>
        </Content>
      </Container>
    );
  }
}



