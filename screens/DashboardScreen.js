import React, { Component } from 'react';
import { Text, View, ScrollView, } from 'react-native';

export default class DashboardScreen extends Component {

  static navigationOptions = {
    // header: null,
    title: 'Dashboard'
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <ScrollView>
          <View>
            <Text>
              This is the dashboard
            </Text>
          </View>
        </ScrollView>

      </View>
    );
  }
}



