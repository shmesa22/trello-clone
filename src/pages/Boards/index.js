import React, { PureComponent, Fragment } from 'react';

import BoardSection from 'components/BoardSection';
import {
  recentlyViewed,
  starredBoards,
  personalBoards
} from './index.mock';

class Boards extends PureComponent {
  componentDidMount() {
    document.title = 'Boards | Trello';
  }

  render() {
    return (
      <Fragment>
        <BoardSection
          title={starredBoards.title}
          icon={starredBoards.icon}
          cards={starredBoards.cards}
        />
        <BoardSection
          title={recentlyViewed.title}
          icon={recentlyViewed.icon}
          cards={recentlyViewed.cards}
        />
        <BoardSection
          title={personalBoards.title}
          icon={personalBoards.icon}
          cards={personalBoards.cards}
        />
      </Fragment>
    );
  }
}

export default Boards;
