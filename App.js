import React, { Component } from 'react';
import Login from "./components/Login";
import {StackNavigator} from "react-navigation";
import Dashboard from "./components/Dashboard";
import {colors} from "./resources/colors";

export default class App extends Component {
  render() {
      const App = StackNavigator({
          Login: { screen: Login },
          Dashboard: { screen: Dashboard }
      }, {
          headerMode: 'screen',
          initialRouteName: 'Dashboard',
          navigationOptions: {
              headerStyle: {
                  backgroundColor: colors.colorPrimary
              },
              headerTintColor: '#ffffff'
          }
      });

    return (
        <App />
    );
  }
}
