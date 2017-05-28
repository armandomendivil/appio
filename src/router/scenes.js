import { React } from 'react';
import { Scene, Actions, ActionConst } from 'react-native-router-flux';
import { Home } from '../containers';

const scenes = Actions.create(
  <Scene key="scene">
    <Scene
      key="home"
      component={Home}
      title={'HOME'}
      cart
      search
      type={ActionConst.RESET}
    />
  </Scene>
);

export default scenes;
