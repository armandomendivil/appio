
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect, Provider } from 'react-redux';
import { Drawer } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import store from './store';
import { closeDrawer } from './actions/drawer';

import Home from './container/Home';
import SideBar from './components/SideBar';

const RouterWithRedux = connect()(Router);

class App extends Component {
  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }


  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  _renderScene(props) { 
    switch (props.scene.route.key) {
      case 'home':
        return <Home />;
      default :
        return <Home />;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          content={<SideBar />}
          onClose={() => this.closeDrawer()}
        >
          <RouterWithRedux>
            <Scene key="root">
              <Scene key="home" component={Home} hideNavBar initial />
            </Scene>
          </RouterWithRedux>
        </Drawer>
      </Provider>
    );
  }
}

export default App();
