import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  onButtonPressed = () => {
    console.log('KLICK!')
    axios.put('http://192.168.1.118:5000/user/update/5ce3f2262c5b7d66e98f2def', {
      displayName: "Ansoooo2",
      email: "anso@test.com2."
    })
      .then(res => console.log(res.data))
      .catch((err) => console.log(err));
    this.props.navigation.navigate('Recommendation')

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          onPress={this.onButtonPressed}
          title="Recommendation"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
