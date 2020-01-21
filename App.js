import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Router from './Router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import burgerBuilderReducer from './src/store/reducers/burgerBuilder';
import orderReducer from './src/store/reducers/order';
import authReducer from './src/store/reducers/auth';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk),
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