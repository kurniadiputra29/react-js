import React, {Component} from 'react';
import * as Font from 'expo-font';
import { AppLoading, Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {Container, Header, Content, Footer, Left, Button, Icon, Title, Body, Right, Text, View} from 'native-base';


export default class App extends Component{

  constructor (props) {
    super(props);

    this.state = {
      loaded:false
    };
  }


  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({loaded: true});
  }

  render(){

    if (!this.state.loaded) return <AppLoading/>;

    return(
      <View style={{flex: 1,backgroundColor: '#0c79c7'}}>
      <Container style={{marginTop: Constants.statusBarHeight}}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="home" />
            </Button>
          </Left>
          <Body>
            <Title>KAP</Title>
          </Body>
          <Right></Right>
        </Header>

        <Content>
          <Text>Ini Content</Text>
        </Content>

        <Footer>
          <Text>Ini Footer</Text>
        </Footer>
      </Container>
      </View>
    );
  }
}