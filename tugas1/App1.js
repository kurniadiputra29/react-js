import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Article from './Articles.js';

export default class App extends Component {
  render (){
  return (
    <View style={styles.container}>
      <View style={styles.head}><Text>Ini Header</Text></View>
      <View style={styles.content}>
        <View style={styles.title}><Text>Ini Title</Text></View>
        <View style={styles.isi}><Text>Ini Isi</Text></View>
        <View style={styles.garis}></View>
        <ScrollView style={styles.scrool}>
        <Article 
          article = "Article 1"
        />
        <Article 
          article = "Article 2"
        />
        <Article 
          article = "Article 3"
        />
        <Article 
          article = "Article 4"
        />
        <Article 
          article = "Article 5"
        />
        <Article 
          article = "Article 6"
        />
        <Article 
          article = "Article 7"
        />
        <Article 
          article = "Article 8"
        />
        <Article 
          article = "Article 9"
        />
        <Article 
          article = "Article 10"
        />
        <Article 
          article = "Article 11"
        />
        <Article 
          article = "Article 12"
        />
        <Article 
          article = "Article 13"
        />
        <Article 
          article = "Article 14"
        />
        <Article 
          article = "Article 15"
        />
        <Article 
          article = "Article 16"
        />
        <Article 
          article = "Article 17"
        />
        <Article 
          article = "Article 18"
        />
        <Article 
          article = "Article 19"
        />
        <Article 
          article = "Article 20"
        />
        <Article 
          article = "Article 21"
        />
        <Article 
          article = "Article 22"
        />
        <Article 
          article = "Article 23"
        />
        <Article 
          article = "Article 24"
        />
        <Article 
          article = "Article 25"
        />
        <Article 
          article = "Article 26"
        />
        <Article 
          article = "Article 27"
        />
        <Article 
          article = "Article 28"
        />
        <Article 
          article = "Article 29"
        />
        <Article 
          article = "Article 30"
        />
        <Article 
          article = "Article 31"
        />
        <Article 
          article = "Article 32"
        />
        <Article 
          article = "Article 33"
        />
        <Article 
          article = "Article 34"
        />
        <Article 
          article = "Article 35"
        />
        <Article 
          article = "Article 36"
        />
        <Article 
          article = "Article 37"
        />
        <Article 
          article = "Article 38"
        />
        <Article 
          article = "Article 39"
        />
        <Article 
          article = "Article 40"
        />
        </ScrollView>
      </View>
      <View style={styles.footer}><Text>Ini Footer</Text></View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  head: {
    flex: 1.5,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title:{
    height: 50,
    backgroundColor: '#f20',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isi:{
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrool:{
    width: '100%',
  },
  garis:{
    height: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  footer: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});