import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native'

export default function ScreenA({navigation}) {

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