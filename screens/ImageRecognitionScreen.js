import React from 'react';
import { GOOGLE_KEY } from 'react-native-dotenv';
import { View, TouchableOpacity, Alert, StyleSheet, Modal, Image } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Button, Text, Container, Content, H1, H2 } from 'native-base';
import vision from 'react-cloud-vision-api';
import auth from '../lib/auth-services';

export default class ImageRecognitionScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    modalVisible: false,
    buttonsVisible: true,
    imageLabel: '',
    uri: ''
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  // -- Take photo and get it in base64 format
  // -- https://docs.expo.io/versions/latest/sdk/camera/

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ base64: true, quality: 0.5 });
      this.setState({ uri: photo.uri })
      console.log(photo.base64);
      this.sendImage(photo.base64);
    }
  };

  //-- Sending photo to google
  // Using plugin -- https://github.com/vladimir2492/react-cloud-vision-api#readme
  // Help src -- https://medium.com/@mlapeter/using-google-cloud-vision-with-expo-and-react-native-7d18991da1dd

  sendImage(base64Img) {
    vision.init({ auth: GOOGLE_KEY })
    const req = new vision.Request({
      image: new vision.Image({
        base64: base64Img,
      }),
      features: [
        new vision.Feature('LABEL_DETECTION', 2),
      ]
    })

    vision.annotate(req).then((res) => {
      // handling response
      // console.log(JSON.stringify(res.responses))
      const imageLabel = res.responses[0].labelAnnotations[0].description
      // Alert.alert(
      //   // -- Image recognition response
      //   'Image detected as',
      //   imageLabel,
      //   [
      //     { text: 'OK', onPress: () => console.log('OK Pressed') },
      //   ],
      //   { cancelable: false },
      // );
      this.setState({ imageLabel: imageLabel })
      this.setModalVisible(true);
      this.setState({ buttonsVisible: false });
      const activityName = 'image-recognition'
      //alert(`Bar code with type ${type} and data ${barcodeNumber} has been scanned!`);
      console.log(`will add recognized image ${imageLabel}`);
      console.log("State ", this.state)

      // -- Adding image and label to db
      auth.addActivity(activityName, 0, { imageLabel: imageLabel, ibase64Img: ".. img.." });

    }, (e) => {
      console.log('Error: ', e)
    })
  }

  static navigationOptions = {
    //header: null,
    title: 'Image recognition'
  };


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>

              {
                this.state.buttonsVisible &&
                <Button
                  style={{
                    flex: 0.2,
                    margin: 10,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </Button>
              }
              {
                this.state.buttonsVisible &&
                <Button
                  style={{
                    flex: 0.4,
                    margin: 10,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => this.snap()}>
                  <Text
                    style={{ fontSize: 18, color: 'white' }}>
                    {' '} Take Photo {' '}
                  </Text>
                </Button>
              }
            </View>
          </Camera>



          <Modal animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>

            <View style={styles.modalContent}>
              <H2>Image detected as</H2>
              <Text style={styles.modalText}>{this.state.imageLabel}</Text>

              <Image style={{ width: 200, height: 200 }} resizeMode='contain'
                source={{ uri: this.state.uri }} />
              <Button primary style={{ margin: 10 }} block onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                this.props.navigation.navigate('Register');
              }}>
                <Text>OK</Text></Button>

            </View>
          </Modal>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    top: '15%',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    marginTop: 10,
    marginBottom: 10
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
