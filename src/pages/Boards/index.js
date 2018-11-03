import React, { PureComponent } from 'react';

import BoardsSection from 'components/BoardsSection';
import Container from 'components/Container';
import { starredBoards, personalBoards } from './index.mock';

import BoardsApi from 'services/BoardsApi';

class Boards extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
    };

    this.handleCreateClick = this.handleCreateClick.bind(this);
  }

  async componentDidMount() {
    document.title = 'Boards | Trello';

    const boards = await BoardsApi.getBoards();
    this.setState({ boards });
  }

  async handleCreateClick() {
    const newBoard = await BoardsApi.createBoard({
      title: 'new board',
      description: 'new board',
    });

    this.setState(previousState => ({
      boards: [...previousState.boards, newBoard],
    }));
  }

  render() {
    const { boards } = this.state;

    return (
      <Container>
        <BoardsSection
          title={starredBoards.title}
          icon={starredBoards.icon}
          boards={boards}
        />
        <BoardsSection
          title={personalBoards.title}
          icon={personalBoards.icon}
          boards={boards}
          onCreateClick={this.handleCreateClick}
        />
      </Container>
    );
  }
}

export default Boards;
