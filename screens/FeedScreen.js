import React, { Component } from 'react';
import { Container, Content, Text, H2, Icon, Header, Body, Left, Right } from 'native-base';
import { LinearGradient } from 'expo';
import { Image } from 'react-native';


export default class FeedScreen extends Component {

  static navigationOptions = {
    header: null,
    title: null
  };
  render() {
    return (

      <Container>
        <Header>
          <Left></Left>
          <Body>
            <Text>Feed</Text>
          </Body>
          <Right></Right>
        </Header>

        <Content padder>


        </Content>
      </Container>

    );
  }
}

