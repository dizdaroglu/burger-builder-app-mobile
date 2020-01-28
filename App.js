import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import burgerBuilderReducer from './src/store/reducers/burgerBuilder';
import orderReducer from './src/store/reducers/order';
import authReducer from './src/store/reducers/auth';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(promiseMiddleware, thunk)
),
);
class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}
export default App