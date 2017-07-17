import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Container, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';

export default class Configuracion extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text style={styles.conf}>CONFIGURACION GENERAL</Text>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Moneda (MXN)</Text>
                <Text note style={styles.nota}>Definir la Moneda estándar</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Idioma</Text>
                <Text note style={styles.nota}>Elija el idioma de la aplicación</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Ordenar</Text>
                <Text note style={styles.nota}>Configurar el orden de los gastos e ingresos</Text>
              </Body>
            </ListItem>

            <ListItem itemDivider>
              <Text style={styles.conf}>GERENCIAR</Text>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Categorias</Text>
                <Text note style={styles.nota}>Agrega nuevas categorias a tus gastos e ingresos</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Herramientas</Text>
                <Text note style={styles.nota}>Agrega nuevas categorias a tus gastos e ingresos</Text>
              </Body>
            </ListItem>

            <ListItem itemDivider>
              <Text style={styles.conf}>ACERCA DE</Text>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Invite a sus amigos</Text>
                <Text note style={styles.nota}>Comparte con tus amigos esta increible aplicación</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Evaluar Ahora</Text>
                <Text note style={styles.nota}>Califica nuestra aplicación</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titulo}>Acerca de</Text>
                <Text note style={styles.nota}>Quieres saber a fondo que es Dypra entra aqui</Text>
              </Body>
            </ListItem>

          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  conf: {
    color: "#57658e",
    fontSize: 10,
    fontWeight: 'bold'
  },
  titulo: {
    color: "black",
    fontSize: 15,
    fontWeight: 'bold'
  },
  nota: {
    color: "gray",
    fontSize: 10
  }
});

module.export = Configuracion;
