import React, { Component } from 'react';
import Login from "./components/Login";
import {StackNavigator} from "react-navigation";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import {colors} from "./resources/colors";
import {Drawer, getTheme, Root, StyleProvider} from "native-base";
import newsfeedTheme from "./native-base-theme/variables/newsfeedTheme";

export default class App extends Component {
    closeDrawer = () => {
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.drawer._root.open();
    };

    render() {
      const App = StackNavigator({
          Login: { screen: Login },
          Dashboard: { screen: Dashboard }
      }, {
          headerMode: 'screen',
          initialRouteName: 'Login',
          navigationOptions: {
              headerStyle: {
                  backgroundColor: colors.colorPrimary
              },
              headerTintColor: '#ffffff'
          }
      });

      return (
          <Root>
              <StyleProvider style={getTheme(newsfeedTheme)}>
                  <Drawer
                      ref={(ref) => { this.drawer = ref; }}
                      content={<SideBar navigator={this.navigator} />}
                      onClose={() => this.closeDrawer()} >
                      <App screenProps={this.openDrawer.bind(this)} />
                  </Drawer>
              </StyleProvider>
          </Root>
      );
    }
}
