import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default function Separator(props) {
  return (
    <View style={style.separator}/>
  )
}

const style = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    borderColor: '#eaeaea'
  }
});
