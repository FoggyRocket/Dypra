import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { Label, Input, Item,Container, Content, List, ListItem, Icon, Left, Body, Right, Switch, Fab, Button, CheckBox } from 'native-base';
import Header from '../components/HeaderPage';

export default class Tarjeta extends Component {
  constructor() {
    super()
    this.state = {
      active: 'true'
    },
    this.state = {
      text1: 'Descripción',
      text2: 'Limite',
      text3: 'Tipo de tarjeta',
      text4: 'Fecha de Cierre',
      text5: 'Fecha de Pago',
    };
  }

  render() {
    return (
      <Container>
      <Header/>
       <Content>
         <List>
           <ListItem icon>
             <Left>
               <Icon name="menu" />
             </Left>
             <Body>
             <Item floatingLabel>
              <Label>Descripción</Label>
              <Input />
            </Item>
             </Body>
             <Right>
               <Text>MXN</Text>
               <Icon name="arrow-down" />
             </Right>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name="calendar" />
             </Left>
             <Body>
             <Item floatingLabel>
              <Label>Limite</Label>
              <Input />
            </Item>
             </Body>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name="cash" />
             </Left>
             <Body>
             <Item floatingLabel>
              <Label>Tipo de tarjeta</Label>
              <Input />
            </Item>
             </Body>
             <Right>
               <Icon name="arrow-down" />
             </Right>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name="checkbox"/>
             </Left>
             <Body>
             <Item floatingLabel>
              <Label>Fecha de cierre</Label>
              <Input />
            </Item>
             </Body>
             <Right>
               <Icon name="arrow-down" />
             </Right>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name="checkbox"/>
             </Left>
             <Body>
             <Item floatingLabel>
              <Label>Fecha de pago</Label>
              <Input />
            </Item>
             </Body>
             <Right>
               <Icon name="arrow-down" />
             </Right>
           </ListItem>
         </List>
       </Content>

       <View style={{ flex: 1 }}>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#57658e' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="star"/>
        </Fab>
      </View>

     </Container>
    );
  }
}

const styles = StyleSheet.create({
  size: {
    fontSize: 15
  }
});

module.export = Tarjeta;
