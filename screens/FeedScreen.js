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

import { StyleSheet, Image, View } from "react-native";
import { LinearGradient } from 'expo';
import auth from '../lib/auth-services'
import FeedCard from '../components/FeedCard';



export default class FeedScreen extends Component {
  constructor(props) {
    super(props);


    this.state = {
      allFeedsArray: []
      // _id: '',
      // activityName: '',
      // feedbackType: '',
      // category: '',
      // image: '',
      // title: '',
      // text: '',
      // date: ''
    };

    // --- Listen to focus events
    // --- https://reactnavigation.org/docs/en/navigation-prop.html
    this.props.navigation.addListener(
      'willFocus', payload => {
        this.getFeedData()
      }
    );

  }

  getFeedData = () => {
    console.log('Getting the user feed')
    auth.getUserFeed()
      .then(feed => {
        console.log("Downloaded feed: ", feed)

        this.setState({ allFeedsArray: feed })

      })
      .catch((err) => console.log(err))

    console.log("State: ", this.state)
  }

  static navigationOptions = {
    header: null,
    title: null
  };


  render() {
    const { allFeedsArray } = this.state;
    return (

      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Feed</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>

          {
            allFeedsArray.reverse().map((feedElement, index) => {
              return (
                <FeedCard key={feedElement._id}
                  {...feedElement} />
              )
            })
          }
          { allFeedsArray.length > 0 ? (<React.Fragment><Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../assets/images/warning.png')} />
                <Body>
                  <Text>Ops, take it easy!</Text>
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
                source={require('../assets/images/coffe-warning-1.jpg')}
              />
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Body>
                <Text note>You drank 6 cups of coffe yesterday!
                  You may want to cut back on your coffee drinking. </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail small source={require('../assets/images/check-ok.png')} />
                <Body>
                  <Text>First vitamin goal acomliched!</Text>
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
                <Text note>You ate a fruit every day</Text>
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
                  <Text>Congrats you reached your first goal</Text>
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
                source={require('../assets/images/water-glass.jpg')}
              />
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Body>
                <Text note>You started your day with a glass of wather</Text>
                <Text note>
                  <Icon style={styles.small} active name="thumbs-up" /> Keep up the good job!
                </Text>
              </Body>
            </CardItem>
          </Card></React.Fragment>) : <Text></Text>}
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