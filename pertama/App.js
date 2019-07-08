import React from 'react'; //seperti include, berasal dari node_moduls
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Word! </Text>
      <Text style={styles.text}>Hello Word! </Text>
    </View>
  );
}

//ini kaya css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});
