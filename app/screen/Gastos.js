import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import { Label, Input, Item,Container, Content, List, ListItem, Icon, Left, Body, Right, Switch, Fab, Button, CheckBox } from 'native-base';
import Header from '../components/HeaderPage';

export default class Gasto extends Component {


  render() {
    return (
      <Container>
      <Header/>
       <Content>
         <List>
           <ListItem icon>
             <Left>
               <Icon name="star" />
             </Left>
             <Body>
             <Input placeholder='Introduzca el valor' />
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
              <Input placeholder='17/Jul/2017' />

             </Body>
           </ListItem>
           <ListItem icon>
             <Left>
               <Icon name="cash" />
             </Left>
             <Body>
            <Input placeholder='Billetera' />
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
             <Input placeholder='Alimentos' />
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
             <Input placeholder='Realizado' />
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
