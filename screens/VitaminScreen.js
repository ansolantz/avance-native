import React, { Component } from 'react';
import { Container, Header, Button, Title, Icon, Body, Content, Text, Left, Right, Card, Thumbnail, CardItem } from 'native-base';

import { StyleSheet, Image } from "react-native";


export default class VitaminScreen extends Component {

  static navigationOptions = {
    header: null,
    //title: 'Recommendation'
  };
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
            <Title>Vitamin</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
          <CardItem>
                <Body>
                <Text> <Icon style={styles.small} name="check-circle-o" type="FontAwesome" /> </Text>
                <Text> <Icon style={styles.small} name="circle-o" type="FontAwesome" /> </Text>
                <Text> <Icon style={styles.small} name="circle-o" type="FontAwesome" /> </Text>
                <Text> <Icon style={styles.small} name="circle" type="FontAwesome" /></Text>
                </Body>
            
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../assets/images/apple-icon.png')} />
                <Body>
                  <Text>Fruit and vegetables?</Text>
                  <Text note>Vitamin</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={require('../assets/images/fruits.jpg')}
              />
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Body>
                <Text note>
                  <Icon style={styles.small} name="info" type="Octicons" />
                  Fruits and vegetables contain many vitamins and minerals that are good for your health. 
                  The general recommendation for fruit and vegetable intake is at least 400 grams per day.</Text>
              </Body>
            </CardItem>
          </Card>
          <Button style={{ marginTop: 40 }} block primary onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Start eating more fruits</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#eaeaea',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    top: '15%',
    height: '50%',
    borderColor: 'rgba(0, 0, 0, 0.6)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  small: {
    color: "#a7a7a7",
    fontSize: 12
  },
  small: {
    color: "#a7a7a7",
    fontSize: 22
  }
});