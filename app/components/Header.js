import React, {Component} from 'react';
import {Header, Title, Left, Right, Body, Icon, Button} from 'native-base';

class Headerex extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
          <Title>Transacciones</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="person"/>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default Headerex;
