import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from "../components/header";
import Close from "../components/close";
import { connect } from "react-redux";
import Maps from "../components/maps";
import {StyleSheet} from "react-native-web";


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
        <View>
          <Maps latitude={this.props.selectedHotel.latitude} longitude={this.props.selectedHotel.longitude} />
        </View>
        <View>
          <Text>{this.props.selectedHotel.name}</Text>
          <Text>{this.props.selectedHotel.address}</Text>
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

export default connect(mapStateToProps)(HotelDetail);
