import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Icon } from 'native-base';
import { LinearGradient } from 'expo';


export default class DashboardScreen extends Component {

  static navigationOptions = {
    // header: null,
    title: 'Dashboard'
  };
  render() {
    return (

      <Container>
        <Content>

          <List>


            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} >
              <ListItem height={90} button onPress={() => this.props.navigation.navigate('Recommendation')}>
                <Thumbnail square size={80} source={require('../assets/images/water-icon.png')} />
                <Text>Vitamins</Text>
              </ListItem>
            </LinearGradient>


            <ListItem height={90}>
              <Thumbnail square size={80} source={require('../assets/images/apple-icon.png')} />
              <Text>Vitamins</Text>
            </ListItem>
            <ListItem height={90}>
              <Thumbnail square size={80} source={require('../assets/images/walking-icon.png')} />
              <Text style={{ padding: 5 }}>Move</Text>
            </ListItem>
            <ListItem style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
              <Thumbnail square size={80} source={require('../assets/images/food-icon.png')} />
              <Text style={{ padding: 5 }}>Food</Text>
            </ListItem>
            <ListItem style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
              <Thumbnail square size={80} source={require('../assets/images/water-icon.png')} />
              <Text>Sleep</Text>
            </ListItem>
            <ListItem style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
              <Thumbnail square size={80} source={require('../assets/images/water-icon.png')} />
              <Text>Focus</Text>
            </ListItem>

            {/* 
              <Icon name='walking' />
              <Icon name='ios-water' />
              <Icon name='md-water' /> */}

          </List>
        </Content >
      </Container >


    );
  }
}



