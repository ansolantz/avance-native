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
  Body, Segment,
  Right, H2, H3
} from "native-base";

import ActivityCard from '../components/ActivityCard';
import Emoji from 'react-native-emoji';
import { WebBrowser } from 'expo';
import auth from '../lib/auth-services'


export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      activityName: '',
      seg: 1
    };


    this.hydrationActivities = [
      {
        activityName: 'drink-water',
        positiveGoal: 8,
        url: require('../assets/images/water-hydration.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'drink-coffee',
        negativeGoal: 5,
        positiveGoal: -1,
        url: require('../assets/images/coffee.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'drink-soda',
        positiveGoal: -1,
        url: require('../assets/images/soda.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'drink-beer',
        positiveGoal: -1,
        url: require('../assets/images/beer.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'barcode-scan',
        positiveGoal: -1,
        url: require('../assets/images/barcode.jpg'),
        imageType: 'image',

      },
      {
        activityName: 'image-recognition',
        positiveGoal: -1,
        url: require('../assets/images/photo.jpg'),
        imageType: 'image',

      }
    ]


    this.vitaminActivities = [
      {
        activityName: 'frut-banana',
        positiveGoal: 1,
        url: require('../assets/images/banana.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'fruit-orange',
        positiveGoal: 2,
        url: require('../assets/images/orange.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'fruit-apple',
        positiveGoal: 2,
        url: require('../assets/images/red-apple.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'fruit-pear',
        positiveGoal: 2,
        url: require('../assets/images/pear.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'fruit-strawberries',
        positiveGoal: 2,
        url: require('../assets/images/strawberries.jpg'),
        imageType: 'image',
      },
      {
        activityName: 'image-recognition',
        positiveGoal: 0,
        url: require('../assets/images/photo.jpg'),
        imageType: 'image',
      }
    ]
  }



  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleActivityClick = (activity) => {
    console.log("add activity");
    console.log("activity", activity.activityName)
    if (activity.activityName === 'barcode-scan') {
      this.props.navigation.navigate('BarcodeScanner');
    } else if (activity.activityName === 'image-recognition') {
      this.props.navigation.navigate('ImageRecognition');
    }
    else {
      auth.addActivity(activity.activityName, activity.positiveGoal, {});
      this.setState({ activityName: activity.activityName })
      this.setModalVisible(true);
    }

  }

  static navigationOptions = {
    header: null,
    title: null //'Register activity'
  };

  render() {
    if (this.state.seg === 1) {
      activities = this.hydrationActivities;
    } else if (this.state.seg === 2) {
      activities = this.vitaminActivities;
    }
    return (
      <Container>
        <Header hasSegment>
          <Left>
          </Left>
          <Body>
            <Title>Register an activity</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Segment>
          <Button
            first style={{ margin: 0, padding: 0 }}
            active={this.state.seg === 1 ? true : false}
            onPress={() => this.setState({ seg: 1 })}
          >
            <Text>Hydration</Text>
          </Button>
          <Button last style={{ margin: 0, padding: 0 }}
            active={this.state.seg === 2 ? true : false}
            onPress={() => this.setState({ seg: 2 })}
          >
            <Text>Vitamin</Text>
          </Button>
        </Segment>

        <Content padder>
          {this.state.seg === 1 && <Text style={{ margin: 8, color: "#777777", fontSize: 16 }}>Your goal today is to
            drink {this.hydrationActivities[0].positiveGoal} glasses of water</Text>}

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {
              activities.map((activityElement, index) => {
                return (
                  <ActivityCard key={activityElement.activityName}
                    handleActivityClick={this.handleActivityClick}
                    activity={activityElement} />
                )
              })
            }
          </View>

          <Modal animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>

            <View style={styles.modalContent}>
              <H2>Ok</H2>
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