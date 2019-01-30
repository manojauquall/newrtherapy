import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Left, Right, Header, Body, Title } from "native-base";
import { DrawerActions } from 'react-navigation';
import DrawerContent from './Sidebar';

class Extra extends Component {
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
              <Text> Hey Cool! </Text>
            </Body>

            <Right>
              <Text> I understand it! </Text>
            </Right>
        </Header>

        <Text style={styles.textSecond}> You can do anything! </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textSecond: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
});

export default Extra;