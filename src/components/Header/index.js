import React from 'react';
import { Header as NBHeader, Left, Right, Body, Button, Icon, Title } from 'native-base';

const Header = (props) => (
  <NBHeader>
    <Left>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
    <Right />
  </NBHeader>
);

export default Header;
