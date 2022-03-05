  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TextInput
} from 'react-native';

const App = () => { 
  const[name, setName] = useState("");
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
       style={styles.input}
       placeholder ="eg: Vidwat"
       onChangeText={(value)=> setName(value)}
       multiline
       keyboardType='visible-password'
       maxLength={24}
       secureTextEntry     //to type in the pwds or sensitive data
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  body: {  
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"

  },
  text: {
    color: "#00008B",
    fontSize: 20,
    textTransform: "uppercase"
  },
  input:{
    borderWidth: 1,
    width:200,
    border: "#555",
    textAlign: "center", 
    borderRadius: 7,
    fontSize: 20
  }
});

export default App;
