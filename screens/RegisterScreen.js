import React from 'react';
import { View, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
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
import Emoji from 'react-native-emoji';
import { WebBrowser } from 'expo';
import auth from '../lib/auth-services'


export default class RegisterScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
      activityName: ''
    };

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

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleActivityClick = (activityName) => {
    console.log("add activity");
    console.log("activity", activityName)
    if (activityName === 'barcode-scan') {
      this.props.navigation.navigate('BarcodeScanner');
    } else {
      auth.addActivity(activityName, {});
      this.setState({ activityName })
      this.setModalVisible(true);
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
            <Title>Register an activity</Title>
          </Body>
        </Header>

        <Content padder>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>

            {
              this.activities.map((activityElement, index) => {
                return (
                  <ActivityCard key={activityElement.activityName}
                    handleActivityClick={this.handleActivityClick}
                    activity={activityElement} />
                )
              })
            }
             <Emoji style={{ flex: 1, fontSize: 100, textAlign: 'center' }} name="coffee" type=''/>
          </View>

          <Modal animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>

            <View style={styles.modalContent}>
              <H2>Great!</H2>
              <Text>Activity {this.state.activityName} registered</Text>

              <Button primary block onPress={() => {
                this.setModalVisible(!this.state.modalVisible);

              }}>
                <Text>Close</Text></Button>
            </View>
          </Modal>
        </Content>
      </Container>
    );

  };
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
});