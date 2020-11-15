import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import BoxContainer from './container/box-container';
import './index.css';

// create store with reducers & redux-thunk middleware
let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <BoxContainer />
    );
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'));