import React, { Component } from 'react';
import { Container, Header, Left, Right, Button, Title, Icon, Body, Content, Text } from 'native-base';


export default class RecommendationScreen extends Component {

  static navigationOptions = {
    header: null,
    //title: 'Recommendation'
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
            <Title>Recommendations</Title>
          </Body>
          <Right />
        </Header>


        <Content padder>
          <Text></Text>
          <Text>Recommendations will be here</Text>
        </Content>
      </Container>


    );
  }
}



