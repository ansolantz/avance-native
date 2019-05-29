import React from 'react';
import { Icon } from 'native-base';


import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {

    return (

      <Icon
        type={this.props.type}
        name={this.props.name}
        size={24}
        style={{ marginBottom: -3, color: '#888888', padding: 4}}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}