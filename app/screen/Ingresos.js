import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { Label, Input, Item,Container, Content, List, ListItem, Icon, Left, Body, Right, Switch, Fab, Button, CheckBox } from 'native-base';
import Header from '../components/HeaderPage';

export default class Ingreso extends Component {


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
             <Input placeholder='Descripción' />
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
              <Input placeholder='Limite' />

             </Body>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name="cash" />
             </Left>
             <Body>
            <Input placeholder='Visa' />
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
             <Input placeholder='Fecha de cierre' />
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
             <Input placeholder='Día de pago' />
             </Body>
             <Right>
               <Icon name="arrow-down" />
             </Right>
           </ListItem>
         </List>
       </Content>


     </Container>
    );
  }
}

const styles = StyleSheet.create({
  size: {
    fontSize: 15
  }
});
