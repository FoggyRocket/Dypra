import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://pre02.deviantart.net/7f1b/th/pre/f/2014/060/6/c/vi_by_magicnaanavi-d75379v.jpg' }} />
              </Left>
              <Body>
                <Text>Cuentas</Text>
                <Text note>Saldo acumulado</Text>
              </Body>
              <Right>
                <Text >$0.00 </Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://pre02.deviantart.net/7f1b/th/pre/f/2014/060/6/c/vi_by_magicnaanavi-d75379v.jpg' }} />
              </Left>
              <Body>
                <Text>Ingresos</Text>
              </Body>
              <Right>
                <Text>$0.00</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://pre02.deviantart.net/7f1b/th/pre/f/2014/060/6/c/vi_by_magicnaanavi-d75379v.jpg' }} />
              </Left>
              <Body>
                <Text>Gastos</Text>
                <Text note>Saldo acumulado</Text>
              </Body>
              <Right>
                <Text >$0.00 </Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://pre02.deviantart.net/7f1b/th/pre/f/2014/060/6/c/vi_by_magicnaanavi-d75379v.jpg' }} />
              </Left>
              <Body>
                <Text>Tarjeta de credito</Text>
              </Body>
              <Right>
                <Text>$0.00</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
