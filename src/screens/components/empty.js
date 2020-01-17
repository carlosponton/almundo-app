import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default function Empty(props) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{props.text}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16
  }
});
