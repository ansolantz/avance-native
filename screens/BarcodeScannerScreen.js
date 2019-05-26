import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Modal, TouchableHighlight, Alert } from 'react-native';
import { Constants, Permissions, BarCodeScanner } from 'expo';
import auth from '../lib/auth-services'
import apiService from '../lib/api-services'


export default class BarcodeScannerScreen extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState({ scanned: false })}
          />
        )}

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60, backgroundColor: '#eaeaea', height: '80%', border: 1 }}>
              <View>
                <Text>Hello World!</Text>

                <Button onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} title={'OK'}>

                </Button>
              </View>
            </View>
          </Modal>
        </View>
      </View>


    );
  }

  handleBarCodeScanned = ({ type, data }) => {

    const barcodeNumber = data;
    this.setState({ scanned: true });

    //type org.gs1 EAN-13
    //Data 5449000011527

    const activityName = 'barcode-scan'
    //alert(`Bar code with type ${type} and data ${barcodeNumber} has been scanned!`);

    //auth.addActivity(activityName, { barcode: barcodeNumber });

    this.setModalVisible(true);
    // apiService.getBarcodeInfo(barcodeNumber)
    //   .then(response => {
    //     const barcodeInfo = response.data.products[0];
    //     console.log("BarcodeInfo ", barcodeInfo)
    //     this.setModalVisible(true);
    //   })

    //   .catch(error => {
    //     alert(`Error scanning barcode! Error: ${error}`)
    //   });



  };
}
