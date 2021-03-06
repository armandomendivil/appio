import React from 'react';
import { Header as NBHeader, Left, Right, Body, Button, Icon, Title } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

const Header = (props) => (
  <NBHeader>
    <Left>
      <Button transparent onPress={props.openDrawer}>
        <Icon active name="menu" />
      </Button>
    </Left>

    <Body>
      <Title>{(props.name) ? props.name : 'Home'}</Title>
    </Body>

    <Right />
  </NBHeader>
);

export default Header;
