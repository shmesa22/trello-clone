import React, { PureComponent, Fragment } from 'react';

import BoardDescription from 'components/BoardDescription';
import List from 'components/List';
import { ListsContainer } from './styles';

class Board extends PureComponent {
  componentDidMount() {
    document.title = 'Board | Trello';
  }

  render() {
    return (
      <Fragment>
        <BoardDescription />
        <ListsContainer>
          <List />
          <List />
          <List />
        </ListsContainer>
      </Fragment>
    );
  }
}

export default Board;
