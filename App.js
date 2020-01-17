import React, {Component} from "react";
import Home from "./src/screens/containers/home";
import HotelList from "./src/screens/containers/hotel-list";
import Header from "./src/screens/components/header";
import API from "./utils/api"

export default class App extends Component {
  state = {
    list: []
  };
  async componentDidMount() {
    const hotels = await API.getHotel(10)
    this.setState({
      list: hotels
    })
  }
  render() {
    return (
      <Home>
        <Header/>
        <HotelList
          list={this.state.list}
        />
      </Home>
    );
  }
}
