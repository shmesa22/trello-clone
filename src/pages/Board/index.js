import React, { PureComponent } from 'react';

import BoardDescription from 'components/BoardDescription';

class Board extends PureComponent {
  componentDidMount() {
    document.title = 'Board | Trello';
  }

  render() {
    return (
      <BoardDescription />
    );
  }
}

export default Board;
