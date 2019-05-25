import React from 'react';
import {View} from 'react-native';
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


export default class RegisterScreen extends React.Component {
  constructor() {
    super()

    this.activities = [
      {
        id: 'drink-water',
        name: 'local-drink',
        type: 'MaterialIcons'
      },
      {
        id: 'drink-coffe',
        name: 'coffee',
        type: 'FontAwesome'
      },
      {
        id: 'drink-soda',
        name: 'cup',
        type: 'Entypo'
      }, 
      {
        id: 'barcode-scan',
        name: 'barcode-scan',
        type: 'MaterialCommunityIcons'
      },
      {
        id: 'add-photo',
        name: 'camera',
        type: 'Entypo'
      }
    ]
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
        <View style={{flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>

          {
            this.activities.map((activityElement) =>{
              return(<ActivityCard key={activityElement.id} activity={activityElement} />) 
            })
          }
            
        </View>
        </Content>
      </Container>
    );

  };
}

