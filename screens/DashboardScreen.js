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

            <LinearGradient colors={['#dfe3ee', '#8b96b3', '#6c8acc']} style={{ margin: 5, borderRadius: 15}} >
              <ListItem height={100} button onPress={() => this.props.navigation.navigate('Recommendation')}>
                <Thumbnail square size={80} source={require('../assets/images/water-icon.png')} />
                <Text>Hidration</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient colors={['#ebf0e6', '#bdd0a6', '#8fc170']} style={{ margin: 5, borderRadius: 15}} >
              <ListItem height={100} >
                <Thumbnail square size={80} source={require('../assets/images/apple-icon.png')} />
                <Text>Vitamins</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient colors={['#e5d7e8', '#c899d4', '#8f4ea0']} style={{ margin: 5, borderRadius: 15}} >
              <ListItem height={100}>
                <Thumbnail square size={80} source={require('../assets/images/walking-icon.png')} />
                <Text style={{ padding: 5 }}>Move</Text>
              </ListItem>
            </LinearGradient>


            <LinearGradient colors={['transparent','rgba(0,0,0,0.6)']} style={{ margin: 5, borderRadius: 15}} >
            <ListItem height={100}>
                <Thumbnail square size={80} source={require('../assets/images/food-icon.png')} />
                <Text style={{ padding: 5 }}>Food</Text>
              </ListItem>
            </LinearGradient>

             <LinearGradient colors={['transparent','rgba(0,0,0,0.6)']} style={{ margin: 5, borderRadius: 15}} >
             <ListItem height={100}>
                <Thumbnail square size={80} source={require('../assets/images/water-icon.png')} />
                <Text>Sleep</Text>
              </ListItem>
            </LinearGradient>

             <LinearGradient colors={['transparent','rgba(0,0,0,0.6)']} style={{ margin: 5, borderRadius: 15}} >
             <ListItem height={100}>
                <Thumbnail square size={80} source={require('../assets/images/water-icon.png')} />
                <Text>Focus</Text>
              </ListItem>
            </LinearGradient>
          
           
          </List>
        </Content>
      </Container>

    );
  }
}



