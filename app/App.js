import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Head from './components/Header';
import Footer from './components/Footer';
import Screenm from './screen/Inicio';
import Graficos from './screen/Graficas';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Boton from './components/Boton';
import Config from './screen/Config';



class App extends Component{

  render(){

    return(
    <Container>
      <Head hasTabs />
    <Tabs>
      <Tab heading={ <TabHeading><Icon name='home' size={25}/></TabHeading>}>
        <Screenm/>
        <Boton/>
      </Tab>
      <Tab heading={ <TabHeading><Icon name='bar-chart'size={25}/></TabHeading>}>
        <Graficos />
      </Tab>
      <Tab heading={ <TabHeading><Icon name='gear'size={25}/></TabHeading>}>
        <Config/>
      </Tab>
    </Tabs>


    </Container>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;
