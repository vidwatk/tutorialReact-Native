import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React  from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable
}from 'react-native'

const Stack = createStackNavigator();

function ScreenA({navigation}) {

  const onPressHandler = () => {
    navigation.navigate("Screen_B")
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>Screen App </Text>
      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? "yellow" : "blue"})}
        onPress= {onPressHandler}
      >
        <Text style={styles.text}>
          Go To screen B
        </Text>
      </Pressable>
    </View>
  )
}

function ScreenB({navigation}) {
  const onPressHandler1 = () => {
    //navigation.navigate("Screen_A")
    navigation.goBack();
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>Screen App </Text>
      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? "yellow" : "blue"})}
        onPress= {onPressHandler1}
        >
        <Text style={styles.text}>
          Go To screen A
        </Text>
      </Pressable>
    </View>
    
  )
}

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        header: () => null
      }}>
        <Stack.Screen 
          name = "Screen_A"
          component={ScreenA}
          // options = {{
          //   header: () => null
          // }}
        />
        <Stack.Screen 
          name = "Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10
  }
})

export default App;