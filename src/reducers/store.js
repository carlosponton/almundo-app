import { createStore } from 'redux';
import rootReducer from './hotel';
import { persistStore, persistReducer } from 'redux-persist';
import {AsyncStorage} from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['selectedHotel']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);

let persistor = persistStore(store);

export {
  store,
  persistor,
};
