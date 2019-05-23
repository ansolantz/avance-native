import React, { Component } from 'react';
import {
  Text, Container, Content, Form, Item, Input, Label, Button,
  List, ListItem, Left, Body, Right, Thumbnail
} from 'native-base';

import auth from '../lib/auth-services'
import axios from 'axios';

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
    auth.me()
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

  static navigationOptions = {
    // header: null,
    title: 'Uppdate User'
  };





  //this.props.navigation.navigate('Dashboard')




  render() {
    return (
      <Container>
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
              <Input keyboardType='numeric' value={this.state.age}
                onChangeText={(age) => this.setState({ age })} />
            </Item>

            <Item floatingLabel last>
              <Label>Wight (kg)</Label>
              <Input keyboardType='numeric' value={this.state.weight}
                onChangeText={(weight) => this.setState({ weight })} />
            </Item>

            <Item floatingLabel last>
              <Label>Height (cm)</Label>
              <Input keyboardType='numeric' value={this.state.height}
                onChangeText={(height) => this.setState({ height })} />
            </Item>

            <Button block info onPress={() => auth.editUser(this.state)}>
              <Text>Edit</Text>
            </Button>
            <Text> </Text>
            <Button block info onPress={() => auth.logout()}>
              <Text>DELETE THIS USER</Text>
            </Button>


          </Form>
        </Content>
      </Container>
    );
  }
}



