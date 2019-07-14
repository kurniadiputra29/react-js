import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';


export default class App extends Component{
  state = {
    click: false,
  };
  handleClick(){
    this.setState({
      click: !this.state.click
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{uri: 'https://image.flaticon.com/icons/png/512/39/39772.png'}}
          style={{width: 30, height: 30}} />
          <Text>KAP</Text>
          <Image source={{uri: 'https://qph.fs.quoracdn.net/main-qimg-094b6418c35690a0a9425642728f081b'}}
          style={{width: 30, height: 30}} />
        </View>
        <View style={styles.garis}></View>
        <View style={styles.content}>
          <Text>KAP</Text>
          <TouchableWithoutFeedback
          onPress={() => this.handleClick()}
          >
          <Image source={{uri: this.state.click ? 'https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Like-Icon.png' : 'https://logodix.com/logo/1278179.png'}}
          style={{width: 50, height: 50}} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.footer}>
          <Image source={{uri: 'https://www.sccpre.cat/mypng/full/228-2282438_home-logo-png.png'}}
          style={{width: 30, height: 30}} />
          <Image source={{uri: 'https://banner2.kisspng.com/20180429/qtq/kisspng-computer-icons-font-awesome-logo-instagram-5ae6276fc21234.6907072015250328157949.jpg'}}
          style={{width: 30, height: 30}} />
          <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-03-512.png'}}
          style={{width: 30, height: 30}} />
          <Image source={{uri: 'https://logodix.com/logo/1278179.png'}}
          style={{width: 30, height: 30}} />
          <Image source={{uri: 'http://www.ampconsortium.lk/assets/images/unknown.jpg'}}
          style={{width: 30, height: 30}} />
        </View>
      
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  garis: {
    backgroundColor: 'grey',
    height:2,
    width: '100%',
  },
  content: {
    flex: 10,
    backgroundColor: '#ebeced',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
