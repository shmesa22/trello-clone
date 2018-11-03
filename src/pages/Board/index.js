import React, { PureComponent, Fragment } from 'react';

import BoardDescription from 'components/BoardDescription';
import List from 'components/List';
import { ListsContainer, NewList } from './styles';

import BoardsApi from 'services/BoardsApi';
import ListsApi from 'services/ListsApi';

class Board extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      board: {},
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    document.title = 'Board | Trello';

    const { match } = this.props;
    const board = await BoardsApi.getBoard(match.params.id);

    this.setState({ board });
  }

  async handleBlur(event) {
    const { match } = this.props;
    const {
      target: { value },
    } = event;
    const { title } = await BoardsApi.editBoard(match.params.id, {
      title: value,
    });

    this.setState(prevState => ({
      board: {
        ...prevState.board.lists,
        title,
      },
    }));
  }

  async handleClick() {
    const { match } = this.props;
    const list = await ListsApi.createList(match.params.id, {
      title: 'new list',
    });

    this.setState(prevState => ({
      board: {
        lists: [...prevState.board.lists, list],
      },
    }));
  }

  render() {
    const {
      board: { title, lists },
    } = this.state;

    return (
      <Fragment>
        <BoardDescription title={title} onBlur={this.handleBlur} />
        <ListsContainer>
          {!!lists &&
            lists.map(({ id, ...props }) => <List key={id} {...props} />)}
          <NewList onClick={this.handleClick}>New List</NewList>
        </ListsContainer>
      </Fragment>
    );
  }
}

export default Board;
