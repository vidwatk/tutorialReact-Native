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
  RefreshControl
} from 'react-native';

const App = () => { 
const [name, setName] = useState("Style Test")

const [Items, setItems] = useState([
  {key: 5, item: "Item 5"},
  {key: 1, item: "Item 1"},
  {key: 2, item: "Item 2"},
  {key: 3, item: "Item 3"},
  {key: 4, item: "Item 4"},
]);
const[Refreshing, setRefreshing] = useState(false)
const onRefresh = () => {
  setRefreshing(true);
  setItems([...Items, {key:69, item: "Item 6"}])
  setRefreshing(false)
}
  return (
    <ScrollView 
    style= {styles.body}
    refreshControl= {<RefreshControl
      refreshing = {Refreshing}
      onRefresh={onRefresh}/>}> 
      {
        Items.map ((object)=>{
          return(
          <View  style={styles.item} key={object.key}>
            <Text style={styles.text} >{object.item}</Text>
          </View>
          )
        })
      }
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  body: {  
    flex: 1,
    backgroundColor: "black",

  },
  text: {
    color: "#00008B",
    fontSize: 50,
    fontWeight: "800",
    fontStyle: "italic",
    textTransform: "uppercase"
  },
  item: {
    backgroundColor: "#87CEEB",
    justifyContent: 'center',
    fontSize: 50,
    margin: 10
  }
});

export default App;
