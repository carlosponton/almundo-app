import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function HotelListLayout(props) {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
      {props.children}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8
  }
});
