import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableHighlight, Alert, Image } from 'react-native';
import { Container, Content, H1, H2, Button, Text } from 'native-base'
import { Constants, Permissions, BarCodeScanner } from 'expo';
import auth from '../lib/auth-services'
import apiService from '../lib/api-services'


export default class BarcodeScannerScreen extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    modalVisible: false,
    barcodeInfo: {
      product_name: '',
      barcode_number: '',
      barcode_type: '',
      description: '',
      category: '',
      nutrition_facts: '',
      images: ['']

    }

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
      <View style={{
        flex: 1,
      }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />

          {/* {scanned && (
            <Button primary block
              onPress={() => this.setState({ scanned: false })}>
              <Text>Tap to Scan Again</Text>
            </Button> 
          )} */}
        </View>

        <Modal animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          <View style={styles.modalContent}>
            <H2>{this.state.barcodeInfo.product_name}</H2>
            <Text>{`Barcode: ${this.state.barcodeInfo.barcode_number}`}</Text>
            <Text>{`Barcode Type: ${this.state.barcodeInfo.barcode_type}`}</Text>
            <Text>{`Description: ${this.state.barcodeInfo.description.substr(1, 109)}...`}</Text>
            {/* <Text>{`Category: ${this.state.barcodeInfo.category}`}</Text> */}
            <Text>{`Nurition facts: ${this.state.barcodeInfo.nutrition_facts}`}</Text>
            <Image style={{ width: 200, height: 200 }} resizeMode='contain' source={{ uri: this.state.barcodeInfo.images[0] }} />
            <Button primary block style={{ margin: 10 }} onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
              this.props.navigation.navigate('Register');
            }}>
              <Text>OK</Text></Button>
          </View>
        </Modal>
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

    auth.addActivity(activityName, 0, { barcode: barcodeNumber });

    apiService.getBarcodeInfo(barcodeNumber)
      .then(response => {
        const barcodeInfo = response.data.products[0];
        console.log("BarcodeInfo ", barcodeInfo)
        this.setState({ barcodeInfo: barcodeInfo })
        this.setModalVisible(true);
      })

      .catch(error => {
        alert(`Error scanning barcode! Error: ${error}`)
      });


  };
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
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
