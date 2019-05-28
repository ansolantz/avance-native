import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import Emoji from 'react-native-emoji';
import {
  Title,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
} from "native-base";
import { images } from '../assets/images/images'

export default class FeedCard extends React.Component {
  imageReq = require('../assets/images/hydration.jpg');

  render() {

    return (
      <Card style={styles.mb}>
        <CardItem>
          <Left>
            <Thumbnail small source={require('../assets/images/check-ok.png')} />
            <Body>
              <Text>{this.props.title} </Text>
              <Text note>{this.props.feedbackType}</Text>
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
            <Text note>{this.props.text}</Text>

          </Body>
        </CardItem>
      </Card>



    )
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }

});