import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import burgerBuilderReducer from './src/store/reducers/burgerBuilder';
import orderReducer from './src/store/reducers/order';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer
})
const store = createStore(rootReducer,
  applyMiddleware(thunk)
);

export default class App extends Component {

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

