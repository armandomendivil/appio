import React, { Component } from 'react';
import { Alert, Image, BackAndroid } from 'react-native';
import Drawer from 'react-native-drawer';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';
import Constants from './constants';
import AppEventEmitter from './utils/AppEventEmitter';

import { Scene, Actions, ActionConst } from 'react-native-router-flux';
import Home from './container/Home';
import SideMenu from './components/SideBar';

// Exit confirm
const onExitApp = () => {
  Alert.alert(
    'Exit',
    'Are you sure you want to exit this app.',
    [
      { text: 'CANCEL', onPress: () => undefined },
      { text: 'YES', onPress: () => BackAndroid.exitApp() },
    ]
  );
  return true;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.introFlag = true;
  }

  componentWillMount() {
    // Check if the app need to show Intro Screen or not
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 300);

    // Short methods
    this.openSideMenu = () => this.refs.drawer.open();
    this.closeSideMenu = () => this.refs.drawer.close();
    this.openSearchModal = () => this.refs.search.open();
    this.closeSearchModal = () => this.refs.search.close();
  }

  componentDidMount() {
    // Subscribe listeners
    this.sideMenuOpenListener = AppEventEmitter
      .addListener(Constants.EmitCode.SideMenuOpen, this.openSideMenu.bind(this));
    this.sideMenuCloseListener = AppEventEmitter
      .addListener(Constants.EmitCode.SideMenuClose, this.closeSideMenu.bind(this));
    this.searchModalOpenListener = AppEventEmitter
      .addListener(Constants.EmitCode.SearchModalOpen, this.openSearchModal.bind(this));
    this.searchModalCloseListener = AppEventEmitter
      .addListener(Constants.EmitCode.SearchModalClose, this.closeSearchModal.bind(this));
  }

  componentWillUnmount() {
    // Unsubscribe listeners
    this.sideMenuOpenListener.remove();
    this.sideMenuCloseListener.remove();
    this.searchModalOpenListener.remove();
    this.searchModalCloseListener.remove();
  }

  render() {
    // 'setLanguage'(store.getState().Language);

    if (this.state.isLoading) {
      return (
        <Image
          style={{
            height: Constants.Dimension.ScreenHeight(1), width: Constants.Dimension.ScreenWidth(1) }}
          source={Constants.SplashScreen.Image}
        />
      );
    }

    const scenes = Actions.create(
      <Scene key="scene">
        <Scene key="home" component={Home} title={'Home'} cart={true} search={true} type={ActionConst.RESET} />
        <Scene key="category" component={Home} cart back search />
      </Scene>
    );

    return (
      <Provider store={store}>
        <Drawer
          ref="drawer"
          type="overlay"
          tapToClose
          captureGestures
          panThreshold={Constants.Drawer.panThreshold}
          panOpenMask={Constants.Drawer.panOpenMask}
          panCloseMask={Constants.Drawer.panCloseMask}
          openDrawerOffset={Constants.Drawer.openDrawerOffset}
          tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}
          side={Constants.Drawer.side}
          content={<SideMenu />}
        >
          <Router
            hideNavBar
            onExitApp={onExitApp}
            panHandlers={null}
            scenes={scenes}
          />
        </Drawer>
      </Provider>
    );
  }
}

export default App;
