import React, { PureComponent } from 'react';

import BoardsSection from 'components/BoardsSection';
import Container from 'components/Container';
import {
  starredBoards,
  personalBoards,
  cards
} from './index.mock';
import { getFavoritedCards } from 'utils/getFavoritedCards';

class Boards extends PureComponent {
  state = {
    cards,
    nextId: cards[cards.length - 1].id + 1,
  };

  componentDidMount() {
    document.title = 'Boards | Trello';
  }

  handleCreateClick = () => {
    this.setState(previousState => ({
      cards: [
        ...previousState.cards,
        {
          id: previousState.nextId,
          title: 'new card',
          isFavorited: false,
          background: 'blue',
        }
      ],
      nextId: previousState.nextId + 1,
    }));
  }

  render() {
    const { cards } = this.state;

    return (
      <Container>
        <BoardsSection
          title={starredBoards.title}
          icon={starredBoards.icon}
          cards={getFavoritedCards(cards)}
        />
        <BoardsSection
          title={personalBoards.title}
          icon={personalBoards.icon}
          cards={cards}
          onCreateClick={this.handleCreateClick}
        />
      </Container>
    );
  }
}

export default Boards;
