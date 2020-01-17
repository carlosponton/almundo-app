import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native'
import HotelListLayout from "../components/hotel-list-layout";
import Empty from "../components/empty";
import Separator from "../components/separator";
import Hotel from "../components/hotel";

class HotelList extends Component {
  keyExtrator = (item) => item.id.toString()
  renderEmpty = () => <Empty text="No hay sugerencias :("/>;
  itemSeparator = () => <Separator/>;
  renderItem = ({item})=> {
    return (
      <Hotel {...item}/>
    )
  }
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

export default HotelList;
