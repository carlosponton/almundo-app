import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default function Header(props) {
  return (
    <View>
      <SafeAreaView style={style.droidSafeArea}>
        <View>
          <Image
            source={require('../../../assets/logo.png')}
            style={style.logo}
          />
        </View>
        <View>
          {props.children}
        </View>
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
  logo: {
    width: 130,
    height: 40,
    resizeMode: 'contain'
  },
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
