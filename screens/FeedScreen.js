import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  H2,
  Icon,
  Header,
  Title,
  Body,
  Left,
  Right,
  Button,
  Card,
  Thumbnail,
  CardItem
} from 'native-base';

import { StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo';



export default class FeedScreen extends Component {

  static navigationOptions = {
    header: null,
    title: null
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
            <Title>Feed</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../assets/images/check-ok.png')} />
                <Body>
                  <Text>Congrats you reached your daily goal</Text>
                  <Text note>Hidration</Text>
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
                source={require('../assets/images/hydration.jpg')}
              />
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Body>
                <Text note>You drank x glasses of water today!</Text>
                <Text note>
                  <Icon style={styles.small} active name="thumbs-up" /> Keep up the good jobb!
                </Text>
              </Body>
            </CardItem>
          </Card>


          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../assets/images/check-ok.png')} />
                <Body>
                  <Text>Walking goal acomplished!</Text>
                  <Text note>Move</Text>
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
                source={require('../assets/images/walking.jpg')}
              />
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Body>
                <Text note>You walked x steps today!</Text>
                <Text note>
                  <Icon style={styles.small} active name="thumbs-up" /> Keep up the good jobb!
                </Text>
              </Body>
            </CardItem>
          </Card>



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
  }
});