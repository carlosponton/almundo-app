function hotels(state = {}, action) {
  switch (action.type) {
    case 'GET_HOTEL_LIST': {
      return {...state, ...action.payload}
    }
    case 'GET_SELECTED_HOTEL': {
      return {...state, selectedHotel: action.payload.hotel}
    }
    default:
      return state
  }
  return state;
}

export default hotels;
