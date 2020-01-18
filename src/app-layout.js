import React, {Component} from "react";
import Home from "./screens/containers/home";
import HotelList from "./screens/containers/hotel-list";
import Header from "./screens/components/header";
import API from "../utils/api";
import { connect } from 'react-redux';
import HotelDetail from "./screens/containers/hotel-detail";

class AppLayout extends Component {
  async componentDidMount() {
    const hotels = await API.getHotels();
    this.props.dispatch({
      type: 'GET_HOTEL_LIST',
      payload: {
        hotels
      }
    })
  }
  render() {
    if(this.props.selectedHotel){
      return <HotelDetail/>
    }
    return (
      <Home>
        <Header/>
        <HotelList/>
      </Home>
    );
  }
}

function mapStateToProps(state) {
 return {
   selectedHotel: state.selectedHotel
 }
}

export default connect(mapStateToProps)(AppLayout);
