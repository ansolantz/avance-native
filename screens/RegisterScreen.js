import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Grid, Row, Col,
  Thumbnail,
  Left,
  Body,
  Right, H2
} from "native-base";

import ActivityCard from '../components/ActivityCard';
import { WebBrowser } from 'expo';
import auth from '../lib/auth-services'


export default class RegisterScreen extends React.Component {
  constructor() {
    super()

    this.activities = [
      {
        activityName: 'drink-water',
        name: 'local-drink',
        type: 'MaterialIcons'
      },
      {
        activityName: 'drink-coffe',
        name: 'coffee',
        type: 'FontAwesome'
      },
      {
        activityName: 'drink-soda',
        name: 'cup',
        type: 'Entypo'
      },
      {
        activityName: 'barcode-scan',
        name: 'barcode-scan',
        type: 'MaterialCommunityIcons'
      },
      {
        activityName: 'add-photo',
        name: 'camera',
        type: 'Entypo'
      }
    ]
  }


  handleActivityClick = (activityName) => {
    console.log("add activity");
    console.log("activity", activityName)
    if (activityName === 'barcode-scan') {
      this.props.navigation.navigate('BarcodeScanner');
    } else {
      auth.addActivity(activityName, {});
    }

  }

  static navigationOptions = {
    header: null,
    title: null //'Register activity'
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Register an activity</Text>
          </Body>
        </Header>
        <Content padder>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>

            {
              this.activities.map((activityElement, index) => {
                return (<ActivityCard key={activityElement.activityName}
                  handleActivityClick={this.handleActivityClick}
                  activity={activityElement} />)
              })
            }
          </View>
        </Content>
      </Container>
    );

  };
}

