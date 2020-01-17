import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

export default function Hotel(props) {
  return (
    <View style={style.container}>
      <View style={style.left}>
        <Image style={style.cover} source={{uri: props.medium_cover_image}}/>
      </View>
      <View style={style.right}>
        <Text style={style.title}>{props.title}</Text>
        <Text style={style.year}>{props.year}</Text>
        <Text style={style.rating}>{props.rating}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flexDirection: 'row'
  },
  left: {

  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
