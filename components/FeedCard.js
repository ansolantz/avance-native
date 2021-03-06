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


export default class FeedCard extends React.Component {


  render() {
    let imageReq;

    console.log("activity name", this.props.activityName)
    if (this.props.activityName === 'drink-water') {
      imageReq = require('../assets/images/hydration.jpg');
    } else if (this.props.activityName === 'walk') {
      imageReq = require('../assets/images/walking.jpg');
    } else if (this.props.activityName === 'eat-fruit') {
      imageReq = require('../assets/images/fruits.jpg');
    } else if (this.props.activityName === 'drink-coffee') {
      imageReq = require('../assets/images/coffe-warning-1.jpg');
    } else if (this.props.activityName === 'drink-beer') {
      imageReq = require('../assets/images/beer-warning-1.jpg');
    } else if (this.props.activityName === 'drink-soda') {
      imageReq = require('../assets/images/sugar-warning-1.jpg');
    } else {
      imageReq = require('../assets/images/standard.jpg');
    }


    return (
      <Card style={styles.mb}>
        <CardItem>
          <Left>
            <Thumbnail small source={
              this.props.feedbackType === 'positive' ? 
              require('../assets/images/check-ok.png') : 
              require('../assets/images/warning.png')} />
            <Body>
              <Text>{this.props.title} </Text>
              <Text note>{this.props.category}</Text>
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
            source={imageReq}
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