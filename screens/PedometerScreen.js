import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, View, Modal, Alert } from "react-native";
import { Container, Header, Text, Title, Icon, Content, Button, H2, Left, Right, Body } from "native-base";


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



  goal = 10000;
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

          // --- Adding to activity db
          auth.addActivity(this.activityName, { steps: this.state.pastStepCount });
          this.setState({
            activityName: this.activityName,
            feedbackType: 'positive',
            category: 'Walking',
            image: '../assets/images/walking.jpg',
            title: 'Walking goal accomplished!',
            text: `You walked ${this.state.pastStepCount} steps today!`
          });
          console.log(this.state)
          // --- Adding to feed db
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

  static navigationOptions = {
    header: null,
    title: null
  };

  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Step counter</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>

          <View style={styles.container}>
            <Text style={{ fontSize: 20, margin: 5 }}>
              Your steps today:</Text>
            <Text style={{ fontSize: 20, color: '#007783', margin: 5, fontWeight: 'bold', }}> {this.state.pastStepCount}
            </Text>
            <Text style={{ fontSize: 20, margin: 5 }}>
              Your daily goal is {this.goal} steps
           </Text>
            <Text style={{ fontSize: 20, margin: 5 }}> </Text>
            {/* <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text> */}

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
                <H2>Good job!</H2>
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
        </Content>
      </Container>
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


