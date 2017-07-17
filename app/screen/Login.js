import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                style={styles.stretch}
                style={styles.logo}
                source={require('./imgs/logit.png')}/>
                <Text style={styles.title}>ASESOR FINANCIERO</Text>
              </View>


              <View>
                <LoginForm />
              </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
//        backgroundColor: '#4594a0'

    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },

    title: {
      color: '#72668C',
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.9

    },
});

export default Login;
