import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, View, Button, Fab,Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from "react-native-router-flux";
export default class FABEx extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  render() {
    return (

        <View style={{

          alignItems: 'flex-end'}}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}

            style={{ backgroundColor: '#5067FF', justifyContent:'center', }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="plus" />
            <Button style={{ backgroundColor: '#34A34F' }}
            onPress={()=>Actions.gray()}>
              <Icon name="credit-card" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}
            onPress={()=>Actions.red()}>
              <Icon name="arrow-down" />
            </Button>
            <Button style={{ backgroundColor: '#DD5144' }}
            onPress={()=>Actions.blue()}>
              <Icon name="arrow-up" />
            </Button>
          </Fab>
        </View>

    );
  }
}
