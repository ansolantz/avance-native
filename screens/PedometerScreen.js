import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from "react-native";
import CircularProgress from "../components/CircularProgress";
import auth from "../lib/auth-services";

export default class PedometerScreen extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    activityName: ''
  };


  goal = 20;
  activityName = 'walk';

  componentDidMount() {
    this._checkSteps();
  }

  componentWillUnmount() {

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
    start.setHours(0, 0, 0, 0)
    //start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
        if (this.state.pastStepCount >= this.goal) {
          console.log("Add steps to db")
          auth.addActivity(this.activityName, { steps: this.state.pastStepCount });
          //this.setState({ activityName })
          //this.setModalVisible(true);
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
  }
});


