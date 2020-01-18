import React, {Component} from "react";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/reducers/store'
import Loading from  './src/screens/components/loading';
import AppLayout from "./src/app-layout";

export default class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
          <AppLayout/>
        </PersistGate>
      </Provider>
    );
  }
}
