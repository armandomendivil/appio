
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [{
        name: 'Bill',
        lastname: 'Gates',
        about: 'Microsoft CEO',
        thumbnail: 'https://pbs.twimg.com/profile_images/558109954561679360/j1f9DiJi.jpeg',
        timestamp: '3:43',
      },{
        name: 'Steve',
        lastname: 'Jobs',
        about: 'Apple CEO',
        thumbnail: 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png',
        timestamp: '3:43',
      }, {
        name: 'Elon',
        lastname: 'Musk',
        about: 'Tesla CEO',
        thumbnail: 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg',
        timestamp: '3:43',
      }],
    };
  }
  render() {
    const { people } = this.state;

    return (
      <Container>
        <Header title={'List of people'}/>
        <Content>
          {people.map((person, key) => (
            <ListItem
              key={key}
              person={person}
            />
          ))}
        </Content>

      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, bindAction)(Home);
