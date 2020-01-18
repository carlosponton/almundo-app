import React from 'react';
import MapView, { Marker } from "react-native-maps";

export default function Maps(props) {
  return (
    <MapView
      style={{width: '100%', height: 200}}
      initialRegion={{
        longitude: Number(props.longitude),
        latitude: Number(props.latitude),
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421
      }}
    >
      <Marker
        coordinate={{
          longitude: Number(props.longitude),
          latitude: Number(props.latitude),
        }}
      />
    </MapView>
  )
}
