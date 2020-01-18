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
        <View style={style.right}>
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
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  droidSafeArea: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
