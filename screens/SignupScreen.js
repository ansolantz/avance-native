import React, { Component } from 'react';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Signup Screen</Text>
        <ScrollView>

          <Text>Username:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />

          <Text>Password:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          <Button
            onPress={this.addUser}
            title="Add user"
            color="#841584"
            accessibilityLabel="add user"
          />
          <Text>
            ...
          </Text>
          <Button
            onPress={this.updateUser}
            title="Update a current user"
            color="#841584"
            accessibilityLabel="Update user"
          />

        </ScrollView>

      </View>
    );
  }
}



