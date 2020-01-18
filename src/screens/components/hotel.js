import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function Hotel(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={style.container}>
        <View style={style.left}>
          <Image style={style.cover} source={{uri: props.images[0]}}/>
        </View>
        <View style={style.right}>
          <Text style={style.title}>{props.name}</Text>
          <Text style={style.price}>${props.price}</Text>
          <Text style={style.stars}>{props.stars}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    width: 200,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  price: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  stars: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
