import React from "react";
import {Image, StyleSheet} from "react-native";

export default function Stars(props) {
  let stars = [];
  for(let i = 0; i < Number(props.stars); i++) {
    stars.push(<Image key={i} style={style.stars} source={require('../../../assets/star.png')}/>);
  }
  return stars
}

const style = StyleSheet.create({
  stars: {
    height: 20,
    width: 20,
    margin: 2,
  },
});
