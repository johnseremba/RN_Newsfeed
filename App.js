import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { Drawer, getTheme, Root, StyleProvider } from "native-base";
import Dashboard from "./components/Dashboard";
import { colors } from "./resources/colors";
import newsfeedTheme from "./native-base-theme/variables/newsfeedTheme";
import { store } from "./data/store/store";
import LinkSideBar from "./data/containers/LinkSideBar";
import LinkLogin from "./data/containers/LinkLogin";

export default class App extends Component {
    closeDrawer = () => {
        this.drawer._root.close();
    };

    openDrawer = () => {
        this.drawer._root.open();
    };

    render() {
      const App = StackNavigator({
          Login: { screen: LinkLogin },
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
                  <Provider store={store}>
                      <Drawer
                          ref={(ref) => { this.drawer = ref; }}
                          content={<LinkSideBar />}
                          onClose={() => this.closeDrawer()} >
                          <App screenProps={this.openDrawer.bind(this)} />
                      </Drawer>
                  </Provider>
              </StyleProvider>
          </Root>
      );
    }
}
