import React from 'react';
import ReactDOM from 'react-dom';
import BoxContainer from './container/box-container';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <BoxContainer></BoxContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));