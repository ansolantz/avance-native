import React from 'react';


import { Container, Content, Text, Grid, Row, Col } from 'native-base';
import { WebBrowser } from 'expo';



export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Register activity'
  };

  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
              <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            </Row>
            <Row>
              <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
              <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );

  };
}

