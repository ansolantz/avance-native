import React, { Component } from 'react';
import { Container, Header, Button, Title, Icon, Body, Content, Text, Left, Right, Card, Thumbnail, CardItem } from 'native-base';

import { StyleSheet, Image } from "react-native";


export default class HydrationScreen extends Component {

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
            <Title>Hydration</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../assets/images/water-icon.png')} />
                <Body>
                  <Text>Did you know?</Text>
                  <Text note>Hydration</Text>
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
                <Text note>
                  Your body depends on water to survive.
                    You should drink water every day. Water is needed for overall good health.
                  Most people have been told they should drink 8 glasses of water each day.
                That is a reasonable goal.</Text>
              </Body>
            </CardItem>
          </Card>
          <Button style={{ marginTop: 40 }} block primary onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Get started</Text>
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
  }
});