import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Grid, Row, Col,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";

import { WebBrowser } from 'expo';



export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Register activity'
  };

  render() {
    return (
      <Container>
        <Content padde>
          <Grid>
            <Row>
              <Col>
                <Card style={styles.mb}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>Glass of water</Text>
                        <Text note>GeekyAnts</Text>
                      </Body>
                    </Left>
                  </CardItem>

                  <CardItem cardBody>
                    <Icon fontSize={40} style={{ color: '#09bac9' }} type="MaterialIcons" name="local-drink" />
                  </CardItem>
                  <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>4923 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>89 Comments</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>

                </Card>



              </Col>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
});