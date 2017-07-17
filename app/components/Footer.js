import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FooterEx extends Component {
  render() {
    return (

        <Footer>
          <FooterTab>
            <Button vertical onPress={this.props.linkto}>
              <Icon name="home" size={24} />
              <Text>Principal</Text>
            </Button>
            <Button vertical onPress={this.props.linkto}>
              <Icon name="bar-chart" size={24} />
              <Text>Graficos</Text>
            </Button>
            <Button vertical active>
              <Icon active name="ellipsis-h" size={24} />
              <Text>Más opciones</Text>
            </Button>

          </FooterTab>
        </Footer>

    );
  }
}
