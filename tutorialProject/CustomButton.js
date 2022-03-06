import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const MashButton = (props) => {
    return (
        <Pressable
        onPress={props.onPressFunction}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {props.title}
        </Text>
      </Pressable>
    )
}


    const styles = StyleSheet.create({
        body: {
          flex: 1,
          alignItems: 'center',
        },
        text: {
          color: '#000000',
          fontSize: 20,
          margin: 10,
          textAlign: 'center',
        },
        input: {
          width: 200,
          borderWidth: 1,
          borderColor: '#555',
          borderRadius: 5,
          textAlign: 'center',
          fontSize: 20,
          marginBottom: 10,
        },
        button: {
          width: 150,
          height: 50,
          alignItems: 'center',
        },
        centered_view: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000099'
        },
        warning_modal: {
          width: 300,
          height: 300,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
        },
        warning_title: {
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ff0',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        warning_body: {
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        },
        warning_button:{
          backgroundColor:'#00ffff',
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
        },
        image: {
          width: 100,
          height: 100,
          margin: 10
        }
      });

export default MashButton;

