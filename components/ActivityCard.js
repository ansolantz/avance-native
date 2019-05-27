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
        onPress={() => this.props.handleActivityClick(this.props.activity.activityName)} >
        <Card >
          <CardItem>
            <Body></Body>
          </CardItem>
          <CardItem cardBody style={{ flex: 1 }}>


            {
              this.props.activity.imageType === 'emoji' &&
              <Emoji style={{ flex: 1, fontSize: 100, textAlign: 'center' }} name={this.props.activity.name} />
            }
            {
              this.props.activity.imageType === 'icon' &&
              <Icon style={{ flex: 1, fontSize: 88, textAlign: 'center', color: '#09bac9' }}
                type={this.props.activity.type}
                name={this.props.activity.name} />
            }
          </CardItem>
          <CardItem style={{ paddingVertical: 0 }}>
            <Body>
              <Text>2/8 today</Text>
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