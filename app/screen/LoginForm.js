import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from "react-native-router-flux";



class LoginForm extends Component {
    render(){
        return(
            <View style={styles.container}>

              <Icon.Button
                name="facebook"
                backgroundColor="#3A529B"
                style={{justifyContent: 'center'}}
                onPress={()=>Actions.app()}
                //onPress={() => { Alert.alert('Iniciando FB')}}
                >
                INICA SESIÓN CON FACEBOOK
              </Icon.Button>

              <TouchableOpacity
              style={styles.buttonContainer}
              onPress={()=>Actions.app()}>
                <Text style={styles.buttonText}>ACCEDER CON CORREO ELECTRÓNICO</Text>
              </TouchableOpacity>

              <Text style={{textAlign: 'center', marginTop: 10, color: '#000000'}}>www.dipra.com.mx</Text>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    buttonContainer:{
      backgroundColor: '#2D1E5D',
      paddingVertical: 8,
      borderRadius: 5,
      marginTop: 10
    },
    buttonText: {
      textAlign: 'center',
      color: '#ffffff',
      fontWeight: '700'
    }


});

export default LoginForm;
