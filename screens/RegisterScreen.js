import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';



export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Register'
  };

  render() {
    return (
      <View >
        <ScrollView>
          <View>
            <Text>
              Register screen
            </Text>
          </View>
        </ScrollView>
      </View>
    );

  };
}

