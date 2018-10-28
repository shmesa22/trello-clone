import React, { PureComponent } from 'react';

class Board extends PureComponent {
  componentDidMount() {
    document.title = 'Board | Trello';
  }

  render() {
    return (
      <h4>Hello world</h4>
    );
  }
}

export default Board;
