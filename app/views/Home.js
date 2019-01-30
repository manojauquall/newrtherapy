import React, { Component } from "react";
import { Text, StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Left, Right, Header, Body, Title } from "native-base";
import { DrawerActions } from 'react-navigation';
import DrawerContent from './Sidebar';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  let navigation = this.props.navigation;
    return (
        <Container>
        <Header style={{backgroundColor: '#12D0FD'}}>
          <Left>
            <Icon
              name='map-o'
              type='font-awesome'
              size={30}
              color={'red'}
              underlayColor={'pink'}
              onPress={() => this.props.navigation.openDrawer()}
            />
			
            </Left>

            <Body>
              <Title> Great Tutorial </Title>
            </Body>

            <Right>
              <Text> very nice </Text>
            </Right>
        </Header>

          <Text style={styles.text}>
          Welcome Home!
          </Text>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Home;