import React, { PureComponent } from 'react';

import BoardSection from 'components/BoardSection';
import Container from 'components/Container';
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
      <Container>
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
      </Container>
    );
  }
}

export default Boards;
