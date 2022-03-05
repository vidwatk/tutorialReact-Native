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
  Button
} from 'react-native';

const App = () => { 
const [name, setName] = useState("first")
const[session, setSession] = useState({number: 6, title:"state"})
const[current, setCurrent] = useState(true)
const[counter, setCounter] = useState(0)

const onClickHandler = () => {
  setName("Second Update")
  setSession({number: 7, title: "some random shit"})
  setCurrent(false)
  setCounter(counter + 1)
}
  return (
    <View style= {styles.body}> 
      <Text style={styles.text}> {name} </Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}> {current ? "current Session" : "Next session"} </Text>
      <Text style={styles.text}> This has been clicked {counter} </Text>
      <Button title="Update State" onPress={onClickHandler}></Button>
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
    fontSize: 20,
    fontWeight: "800",
    fontStyle: "italic",
    margin: 10 
  }
});

export default App;
