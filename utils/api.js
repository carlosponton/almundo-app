const BASE_API = 'https://almundo-ponton.herokuapp.com/';

class Api {
  async getHotels(){
    const query = await fetch(`${BASE_API}hotels`);
    const { hotels } = await query.json();
    return hotels;
  }
}

export default new Api();
