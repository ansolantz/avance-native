import React from 'react';
import { Icon } from 'native-base';


import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {

    return (

      <Icon
        type={this.props.type}
        name={this.props.name}
        size={22}
        style={{ marginBottom: -5, marginTop: 4, color: '#888888', padding: 4 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}