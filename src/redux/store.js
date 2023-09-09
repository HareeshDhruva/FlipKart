
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {backendReducer} from '../redux/reducers/productReducer'; // Import your backend reducer and any other reducers
import thunk from 'redux-thunk'
import {composeWithDevTools }from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import { getProductDetailsReducer,cartReducer } from '../redux/reducers/productReducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  getProducts:backendReducer,
  getProductsDetails:getProductDetailsReducer,
  cart:cartReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

const persistor = persistStore(store);
export {store, persistor};
