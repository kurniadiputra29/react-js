import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, FlatList} from 'react-native';

export default class App extends Component{
  state={
    todo: '',
    data: [
      {text: 'Makan Nasi'},
      {text: 'Makan Bakso'},
      {text: 'Makan Soto'},
      {text: 'Makan Roti'},
    ],
  };

  handleInput(arg) {
    this.setState({
      todo: arg
    });
  }

  sendData(){
    let pack = {text: this.state.todo};

    this.setState({
      data: [...this.state.data, pack]
    });
  }

  render(){
    return(
      <View style={styles.container}>

        <Text style={styles.title}>Ini Todo List</Text>
        <View style={styles.wrepper}>
          <FlatList
            data={this.state.data}
            keyExtractor={(alias, index) => index.toString()}
            renderItem={(alias, index)=>(
              <Text>
                {alias.item.text}
              </Text>
            )}
          />
        </View>

        {/*<Text>{this.state.todo}</Text>*/}
        <TextInput 
          style={styles.input}
          placeholder="Apa yang kamu lihat??"
          onChangeText={ (text) => this.handleInput(text) }
        />

        <Button 
          title="Submit" 
          onPress= {()=> this.sendData()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  input:{
    height: 30,
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  title:{
    fontSize: 20,
  },
  wrepper:{
    marginBottom:20,
    width: '80%',
  }
});