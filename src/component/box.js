import React from 'react';

class Box extends React.Component {
  render() {
    return (
      <div
        style={{ backgroundColor: `${this.props.color}` }}
        className="wrapper"
      >
        <div className="box">
          <button
            onClick={ () =>{ this.props.handleClick() } }
          >
            Change Color
          </button>
        </div>
      </div>
    );
  }
}

export default Box;