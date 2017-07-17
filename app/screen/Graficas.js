import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import { Bar } from 'react-native-pathjs-charts'
import Pie from '../components/graficas/Pie';
export default class CardHeaderFooterExample extends Component {
  render() {

    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Gastos </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Pie/>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});
