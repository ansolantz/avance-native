import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, H2, Icon, Header, Body, Left, Right } from 'native-base';
import { LinearGradient } from 'expo';
import { Image } from 'react-native';


export default class DashboardScreen extends Component {

  static navigationOptions = {
    header: null,
    title: null
  };
  render() {
    return (

      <Container>
        <Content>
          <Header>
            <Body>
              <Image style={{ width: 207, height: 35 }} source={require('../assets/images/logo.png')} />
            </Body>
          </Header>
          <List>
            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#afbbda', '#8b96b3', '#6c8acc']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={100} button onPress={() => this.props.navigation.navigate('Recommendation')}>
                <Thumbnail square size={80} source={require('../assets/images/water-icon.png')} />

                <Text style={{ color: '#ffffff' }}>Hidration</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#d1dec5', '#bdd0a6', '#8fc170']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={100} button onPress={() => this.props.navigation.navigate('Recommendation')}>
                <Thumbnail square size={80} source={require('../assets/images/apple-icon.png')} />
                <Text style={{ color: '#ffffff' }}>Vitamins</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#d8bfde', '#c899d4', '#8f4ea0']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={100} button onPress={() => this.props.navigation.navigate('Pedometer')}>
                <Thumbnail square size={80} source={require('../assets/images/walking-icon.png')} />
                <Text style={{ color: '#ffffff' }}>Move</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['transparent', 'rgba(0,0,0,0.6)']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={100}>
                <Thumbnail square size={80} source={require('../assets/images/food-icon.png')} />
                <Text style={{ color: '#ffffff' }}>Food</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['transparent', 'rgba(0,0,0,0.6)']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={100}>
                <Thumbnail square size={80} source={require('../assets/images/sleep-icon.png')} />
                <Text style={{ color: '#ffffff' }}>Sleep</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['transparent', 'rgba(0,0,0,0.6)']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={100}>
                <Thumbnail square size={80} source={require('../assets/images/focus-icon.png')} />
                <Text style={{ color: '#ffffff' }}>Focus</Text>
              </ListItem>
            </LinearGradient>
          </List>
        </Content>
      </Container>

    );
  }
}

