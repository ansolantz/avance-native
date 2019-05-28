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

    return (
      <Card style={styles.mb}>
        <CardItem>
          <Left>
            <Thumbnail small source={require('../assets/images/check-ok.png')} />
            <Body>
              <Text>This is the feed card</Text>
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