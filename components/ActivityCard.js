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

export default class ActivityCard extends React.Component {

  render() {

    return (
      <TouchableOpacity style={{ width: '46%', marginBottom: 15 }}
        onPress={() => this.props.handleActivityClick(this.props.activity)} >

        <Card>
          <CardItem>
            <Body></Body>
          </CardItem>
          <CardItem cardBody style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            {
              this.props.activity.imageType === 'image' &&
              <Thumbnail style={{ width: 140, height: 140, borderRadius: 70 }} source={this.props.activity.url} />
            }
          </CardItem>
          <CardItem style={{ paddingVertical: 0 }}>
            <Body>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
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