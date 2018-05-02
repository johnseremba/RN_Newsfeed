import React, { Component } from 'react';
import Login from "./components/Login";
import {StackNavigator} from "react-navigation";
import Dashboard from "./components/Dashboard";

export default class App extends Component {
  render() {
      const App = StackNavigator({
          Home: { screen: Login },
          Dashboard: { screen: Dashboard }
      }, {
          headerMode: 'screen'
      });
    return (
        <App />
    );
  }
}
