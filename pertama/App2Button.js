import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default class App extends Component{
  state = {
    content: 1,
    baca: false,
  };
  handleBaca(){
    this.setState({
      baca: !this.state.baca
    });
  }
  // handleSentuhan(){
  //   alert('hai')
  // }
  handleSentuhan(arg){
    let result = this.state.content + arg;

    this.setState({
      content: result
    });
  }

  render(){
    return(
      <View 
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>{this.state.content}</Text>
        <Button 
          title="Tambah 1"
          color= "blue"
          onPress={ () => this.handleSentuhan(1) }
        />
        <Button 
          title="Tambah 2"
          color= "blue"
          onPress={ () => this.handleSentuhan(2) }
        />
        <Button 
          title="Tambah 3"
          color= "blue"
          onPress={ () => this.handleSentuhan(3) }
        />


        <TouchableOpacity
          onPress={() => this.handleSentuhan(4)}
        >
          <View>
            <Text>Saya Text 1</Text>
            <Text>Saya Text 2</Text>
            <Text>Saya Text 3</Text>
          </View>
        </TouchableOpacity>


        <TouchableHighlight
          onPress={() => this.handleSentuhan(5)}
        >
          <View>
            <Text>Saya Text 1</Text>
            <Text>Saya Text 2</Text>
            <Text>Saya Text 3</Text>
          </View>
        </TouchableHighlight>


        <TouchableNativeFeedback
          onPress={() => this.handleSentuhan(5)}
        >
          <View style={{
            backgroundColor: 'yellow',
            borderRadius: 20,
            elevation: 4,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Saya Text 1</Text>
            <Text>Saya Text 2</Text>
            <Text>Saya Text 3</Text>
          </View>
        </TouchableNativeFeedback>


        <TouchableWithoutFeedback
          onPress={() => this.handleBaca()}
        >
          <View style={{backgroundColor: this.state.baca ? 'lime' : 'aqua'}}>
            <Text>Bismillah</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}