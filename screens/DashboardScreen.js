import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, H2, Icon, Header, Body, Left, Right } from 'native-base';
import { LinearGradient } from 'expo';
import { Image, StyleSheet, View } from 'react-native';


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
              <ListItem height={90} button onPress={() => this.props.navigation.navigate('Hydration')}>
                <Thumbnail size={80} source={require('../assets/images/water-hydration.jpg')} />
                <View style={{ alignItems: 'left' }} >
                  <Text style={styles.text}>Hydration</Text>
                </View>

              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#d1dec5', '#9ac369', '#6aac41']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={90} button onPress={() => this.props.navigation.navigate('Vitamin')}>
                <Thumbnail size={100} source={require('../assets/images/fruits.jpg')} />
                <Text style={styles.text} >Vitamins</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#f5ed91', '#f1e55a', '#e8d60e']} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={90} button onPress={() => this.props.navigation.navigate('Pedometer')}>
                <Thumbnail size={100} source={require('../assets/images/walking.jpg')} />
                <Text style={styles.text}>Move</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#f1ce70', '#eeae02', '#d88112', ]} style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={90}>
                <Thumbnail size={100} source={require('../assets/images/tapas.jpg')} />
                <Text style={styles.text}>Food</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#7baebc', '#14809e', '#055369']}  style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={90}>
                <Thumbnail size={100} source={require('../assets/images/sleep.jpg')} />
                <Text style={styles.text}>Sleep</Text>
              </ListItem>
            </LinearGradient>

            <LinearGradient start={[1, 1]} end={[0, 0]} colors={['#d8bfde', '#c899d4', '#8f4ea0']}  style={{ margin: 5, borderRadius: 15 }} >
              <ListItem height={90}>
                <Thumbnail size={100} source={require('../assets/images/focus.jpg')} />
                <Text style={styles.text}>Focus</Text>
              </ListItem>
            </LinearGradient>
          </List>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10
  },
  small: {
    color: "#ffffff",
    fontSize: 12
  }
});