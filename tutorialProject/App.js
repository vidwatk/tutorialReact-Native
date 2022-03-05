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
  TextInput, 
  Button, 
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

const App = () => { 
  const[name, setName] = useState("");
  const[submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => { 
      SetSubmitted(!submitted);

  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
       style={styles.input}
       placeholder ="eg: Vidwat"
       onChangeText={(value)=> setName(value)}
       
      />
     {/*<Button title={submitted ? 'Clear' : 'Submit' }  
      onPress={onPressHandler}
      color="#00f"
      />*/}
      <TouchableHighlight
       onPress={onPressHandler}
       style={styles.button}
       activeOpacity={0.76} 
       underlayColor="yellow"
      >
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit' }</Text>
      </TouchableHighlight>
      {submitted? 
      <Text style={styles.text}>Reg complete: {name}</Text>
    : null}
      
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
    color: "black",
    fontSize: 20,
    textTransform: "uppercase"
  },
  input:{
    borderWidth: 1,
    width:200,
    borderColor: "#555",
    textAlign: "center", 
    borderRadius: 7,
    fontSize: 20,
    margin: 20,
  },
  button: {
    backgroundColor: "orange",
    width: 150,
    height: 45,
    elevation: 32,
    alignItems: "center"
  }
});

export default App;
