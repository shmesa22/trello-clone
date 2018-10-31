import React, { PureComponent, Fragment } from 'react';

import BoardDescription from 'components/BoardDescription';
import List from 'components/List';
import { ListsContainer } from './styles';
import {
  boardLists
} from './index.mock';

class Board extends PureComponent {
  componentDidMount() {
    document.title = 'Board | Trello';
  }

  render() {
    return (
      <Fragment>
        <BoardDescription />
        <ListsContainer>
          {boardLists.map(({ id, ...props }) => (
            <List key={id} {...props} />
          ))}
        </ListsContainer>
      </Fragment>
    );
  }
}

export default Board;
