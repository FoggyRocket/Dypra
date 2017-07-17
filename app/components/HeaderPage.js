import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import {Actions} from "react-native-router-flux";
export default class HeaderIcon extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent onPress={()=>Actions.app()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
        </Header>

    );
  }
}
