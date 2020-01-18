import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native'
import HotelListLayout from "../components/hotel-list-layout";
import Empty from "../components/empty";
import Separator from "../components/separator";
import Hotel from "../components/hotel";
import { connect } from "react-redux";

class HotelList extends Component {
  keyExtrator = (item) => item._id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias :("/>;
  itemSeparator = () => <Separator/>;
  viewHotel = (item) => {
    this.props.dispatch({
      type: 'GET_SELECTED_HOTEL',
      payload: {
        hotel: item
      }
    })
  };
  renderItem = ({item}) => {
    return (
      <Hotel
        {...item}
        onPress={() => { this.viewHotel(item) }}
      />
    )
  };
  render() {
    return (
      <HotelListLayout
        title={'Recomendados'}
      >
        <FlatList
          keyExtractor={this.keyExtrator}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </HotelListLayout>
    )
  }
}

function mapStateToProps(state) {
 return {
   list: state.hotels
 };
}

export default connect(mapStateToProps)(HotelList);
