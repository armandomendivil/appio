import React from 'react';
import { ListItem as NBListItem, Left, Thumbnail, Body, Text, Right } from 'native-base';

const ListItem = ({ person }) => (
  <NBListItem avatar>
    <Left>
      <Thumbnail source={{ uri: person.thumbnail }} />
    </Left>
    <Body>
      <Text>{person.name} {person.lastname}</Text>
      <Text>{person.about}</Text>
    </Body>
    <Right>
      <Text note>{person.timestamp}</Text>
    </Right>
  </NBListItem>
);

export default ListItem;
