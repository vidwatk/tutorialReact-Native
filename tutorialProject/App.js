  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native';

const App = () => { 
  return (
    <View style= {styles.body}> 
      <Text style={styles.text}>This is the first CLI app</Text>
      <Button title="youtubeChannel" onPress={() => {Linking.openURL("https://github.com/vidwatk")}}></Button>
    </View>

  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#87CEEB",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "#00008B",
    fontSize: 25,
    fontWeight: "800",
    fontStyle: "italic",
    margin: 10 
  }
});

export default App;
