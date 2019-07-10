import React, { Component } from 'react'; //seperti include, berasal dari node_moduls
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Article from './Articles.js';
import Flex from './flex.js';

export default class App extends Component {

  render(){
    return (
      <View>
        <View style={styles.container}>

          <Article 
            title="Judul 1 !" 
            content="Ini cara ganti title dan content !"
          />
          <Flex></Flex>

        </View>

        <ScrollView >
          <View style={styles.container}>

            <Article 
              title="Judul 1 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 2 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 3 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 4 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 5 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 1 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 2 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 3 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 4 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 5 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 1 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 2 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 3 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 4 !" 
              content="Ini cara ganti title dan content !"
            />
            <Article 
              title="Judul 5 !" 
              content="Ini cara ganti title dan content !"
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
  flex : 1,
  justifyContent: 'center',
 },
}); 
