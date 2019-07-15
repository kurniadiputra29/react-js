import React ,{Component} from 'react';
import * as Font from 'expo-font';
import {AppLoading, Constants} from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View} from 'native-base';
import {TouchableWithoutFeedback, Image} from 'react-native';

export default class App extends Component{
  state ={
    click: false,
  };
  handleClick(){
    this.setState({
      click: !this.state.click
    });
  }

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
      <View style={{flex: 1, backgroundColor:'#ebeff5'}}>
      <Container style={{marginTop: Constants.statusBarHeight, backgroundColor: 'white'}}>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <Button transparent>
              <Icon name='ios-camera' style={{color: 'black'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black'}}>Instagram</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-send' style={{color: 'black'}}/>
            </Button>
          </Right>
        </Header>
        <Content>
          <Text style={{flex: 1, width: '100%', textAlign: 'center'}} >
            This is Content Section
          </Text>
          <TouchableWithoutFeedback 
            onPress = { () => this.handleClick()}
          >
            <View style={{flex: 1, width: '100%', textAlign: 'center'}}>
              <Icon name='heart' style={{color: this.state.click ? 'red' : 'black'}}/>
              <Icon name='open' style={{color: 'black'}}/>
              <Icon name='ios-send' style={{color: 'black'}}/>
            </View>
          </TouchableWithoutFeedback>
        </Content>
        <Footer style={{backgroundColor: 'white'}}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button>
              <Icon name='ios-home' style={{color: 'black'}}/>
            </Button>
            <Button>
              <Icon name='ios-search' style={{color: 'black'}}/>
            </Button>
            <Button>
              <Icon name='ios-add-circle' style={{color: 'black'}}/>
            </Button>
            <Button>
              <Icon name='heart-empty' style={{color: 'black'}}/>
            </Button>
            <Button>
              <Icon name='person' style={{color: 'black'}}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </View>
    );
  }
}