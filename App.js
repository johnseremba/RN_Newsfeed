import React, { Component } from 'react';
import Login from "./components/Login";
import {StackNavigator} from "react-navigation";
import Dashboard from "./components/Dashboard";
import {colors} from "./resources/colors";
import {getTheme, StyleProvider} from "native-base";
import newsfeedTheme from "./native-base-theme/variables/newsfeedTheme";

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
        <StyleProvider style={getTheme(newsfeedTheme)}>
            <App />
        </StyleProvider>
    );
  }
}
