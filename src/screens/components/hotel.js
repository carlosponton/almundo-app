import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Stars from "./stars";

export default function Hotel(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={style.container}>
        <View>
          <Image style={style.cover} source={{uri: props.images[0]}}/>
          <View style={style.containerStars}>
            <Stars key={props._id} stars={props.stars}/>
          </View>
        </View>
        <View style={style.right}>
          <Text style={style.title}>{props.name}</Text>
          <Text>{props.city}</Text>
          <Text style={style.price}>${props.price}</Text>
          <Text>{props.availability} disponibles</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container:{
    flexDirection: 'row',
    padding: 10
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
    fontSize: 30,
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
    height: 20,
    width: 20,
    margin: 2,
  },
  containerStars: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row'
  },
  city: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
