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
import auth from '../lib/auth-services'
import FeedCard from '../components/FeedCard';



export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      activityName: '',
      feedbackType: '',
      category: '',
      image: '',
      title: '',
      text: '',
      date: ''
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
        console.log(feed)
        this.setState({
          _id: feed._id,
          activityName: feed.activityName,
          feedbackType: feed.feedbackType,
          category: feed.category,
          image: feed.image,
          title: feed.title,
          text: feed.text,
          date: feed.date
        });
      })
      .catch((err) => console.log(err))

    console.log("State: ", this.state)
  }

  static navigationOptions = {
    header: null,
    title: null
  };
  render() {
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
                source={require('../assets/images/hydration.jpg')}
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