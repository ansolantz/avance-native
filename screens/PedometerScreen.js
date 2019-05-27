import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View, Modal, Alert } from "react-native";
import { Container, Header, Title, Content, Button, H2 } from "native-base";
import CircularProgress from "../components/CircularProgress";
import auth from "../lib/auth-services";

export default class PedometerScreen extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    modalVisible: false,
    activityName: '',
    activityName: '',
    feedbackType: '',
    category: '',
    image: '',
    title: '',
    text: '',
  };



  goal = 1000;
  activityName = 'walk';

  componentDidMount() {
    this._checkSteps();
  }

  componentWillUnmount() {

  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _checkSteps = () => {

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );


    const end = new Date();
    const start = new Date();

    //Starting from midnight
    start.setHours(0, 0, 0, 0)

    //start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
        if (this.state.pastStepCount >= this.goal) {
          console.log("Add steps to db")

          //Adding to activity db
          //auth.addActivity(this.activityName, { steps: this.state.pastStepCount });
          this.setState({
            activityName: this.activityName,
            feedbackType: 'positive',
            category: 'Walking',
            image: '../assets/images/walking.jpg',
            title: 'Walking goal accomplished!',
            text: `You walked ${this.state.pastStepCount} steps today!`
          });
          console.log(this.state)
          //Adding to feed db
          auth.addToFeed(this.state)
          this.setModalVisible(true);
        }
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );

  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          Steps taken in the last 24 hours: {this.state.pastStepCount}
        </Text>
        <Text>
          Your daily goal is {this.goal}
        </Text>
        <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>

        <CircularProgress
          percent={this.state.pastStepCount / this.goal * 100} currentCount={this.state.pastStepCount}
          bgRingWidth={15} progressRingWidth={15} goal={this.goal}></CircularProgress>


        <Modal animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          <View style={styles.modalContent}>
            <H2>Good jobb!</H2>
            <Text>You walked {this.state.pastStepCount} today.</Text>
            <Text>(Your goal: {this.goal})</Text>
            <Text>Activity {this.state.activityName} accomplished!</Text>

            <Button primary block onPress={() => {
              this.setModalVisible(!this.state.modalVisible);

            }}>
              <Text>Close</Text></Button>
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
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


