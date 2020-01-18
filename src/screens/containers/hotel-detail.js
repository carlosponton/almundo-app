import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from "../components/header";
import Close from "../components/close";
import { connect } from "react-redux";
import Maps from "../components/maps";
import Stars from "../components/stars";


class HotelDetail extends Component {
  close = () => {
    this.props.dispatch({
      type: 'GET_SELECTED_HOTEL',
      payload: {
        hotel: null
      }
    })
  };
  render() {
    return(
      <View>
        <Header>
          <Close
            onPress={this.close}
          />
        </Header>
        <View style={styles.description}>
          <Text style={styles.title}>{this.props.selectedHotel.name}</Text>
          <View style={styles.stars}>
            <Stars key={this.props.selectedHotel._id} stars={this.props.selectedHotel.stars}/>
          </View>
          <View style={styles.address}>
            <Image style={styles.iconMarker} source={require('../../../assets/marker.png')}/>
            <Text>{this.props.selectedHotel.address}</Text>
          </View>
        </View>
        <View>
          <Maps latitude={this.props.selectedHotel.latitude} longitude={this.props.selectedHotel.longitude} />
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedHotel: state.selectedHotel
  }
}

const styles = StyleSheet.create({
  description: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30
  },
  stars:{
    flexDirection: 'row'
  },
  address: {
    flexDirection: 'row'
  },
  iconMarker: {
    width: 20,
    height: 20
  }
});

export default connect(mapStateToProps)(HotelDetail);
