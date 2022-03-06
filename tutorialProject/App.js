  /**

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
  FlatList
} from 'react-native';

const App = () => { 
const [name, setName] = useState("Style Test")

const [Items, setItems] = useState([
  {key: '5', name: "Item 5"},
  {key: '1', name: "Item 1"},
  {key: '2', name: "Item 2"},
  {key: '3', name: "Item 3"},
  {key: '4', name: "Item 4"},
]);
const[Refreshing, setRefreshing] = useState(false)
const onRefresh = () => {
  setRefreshing(true);
  setItems([...Items, {key:69, item: "Item 6"}])
  setRefreshing(false)
}
  return (
    <FlatList
      data={Items}
      renderItem={({item}) => (
        <View  style={styles.item}>
             <Text style={styles.text} >{item.name}</Text>
       </View>
      )}
    />  
    // <ScrollView 
    // style= {styles.body}
    // refreshControl= {<RefreshControl
    //   refreshing = {Refreshing}
    //   onRefresh={onRefresh}/>}> 
    //   {
    //     Items.map ((object)=>{
    //       return(
    //       <View  style={styles.item} key={object.key}>
    //         <Text style={styles.text} >{object.item}</Text>
    //       </View>
    //       )
    //     })
    //   }
    // </ScrollView>

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
