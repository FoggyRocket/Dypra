import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import App from './App';
import Menu from './screen/Cardcredi';
import Ingreso from './screen/Ingresos';
import Gastos from './screen/Gastos';
import Login from './screen/Login';

const Route = () => {
  return (
    <Router>
      <Scene key="root">
      <Scene key="logi"
        component={Login}
        header={null}
        initial/>
        <Scene key="app"
          component={App}
          header={null}/>
        <Scene
          key="gray"
          header={null}
          component={Menu}/>
        <Scene
          key="red"
          header={null}
          component={Ingreso}/>
        <Scene
          key="blue"
          header={null}
          component={Gastos}
        />
      </Scene>
    </Router>
  );
}
export default Route;
