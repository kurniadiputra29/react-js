import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';

let todos = [
  {
    title: 'Mau Tidur',
    desc: 'Saya Mau Tidur, Tapi Bohong :v :v',
  },
  {
    title: 'Mau Makan',
    desc: 'Saya Mau Makan, Tapi Bohong :v :v',
  },
  {
    title: 'Mau Nyuci',
    desc: 'Saya Mau Nyuci, Tapi Bohong :v :v',
  },
];

export default class App extends React.Component {
  render(){
    return(
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          
          {/*ini perulangan pake methode map()*/}
          {todos.map( (todo, index) => (
            <View key={index}>
              <Text>{index}</Text>
              <Text>{todo.title}</Text>
              <Text>{todo.desc}</Text>
            </View>
          ))}
          
          <View style={{
            margin: 15,
            width: '100%',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          </View>

          {/*ini perulangan pake methode FlatList*/}

          <FlatList
            data={todos}
            keyExtractor={(todo, index) => index.toString()}
            renderItem={(todo) => (
              <View>
                <Text>{todo.item.title}</Text>
                <Text>{todo.item.desc}</Text>
              </View>
            )}
          />
        </View>
    );
  }
}