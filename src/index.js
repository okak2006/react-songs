import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


//Redux Steps
//Prequisite: install react-redux
//1. create actions - takes param and returns object with type and payload
//2. create reducers - logic to handle and return payload. 
//3. In reducers > index.js: 1) import {combineReducers} from 'redux' 2) export default combineReducers({reducer1: reducer1,.....})
//4. In source > index.js: 
  // 1) import {Provider} from 'react-redux'
  // 2) import {createStore} from 'redux'
  // 3) import reducers
  // 4) Wrap <App/> with Provider and pass store: <Provider store={createStore(reducers)}><App/></Provider>
//5. Use Connect where you want access to store
  // 1) import {connect} from 'react-redux'
  // 2) define state mapping function i.e. const getMyState=(state)=>{return {songs: state.songs}} songs is key value in combineReducer
  // 3) export default connect(getMyState)(functionInComponent)