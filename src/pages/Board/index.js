import React, { PureComponent, Fragment } from 'react';

import BoardDescription from 'components/BoardDescription';
import List from 'components/List';
import { ListsContainer, NewList } from './styles';

import BoardsApi from 'services/BoardsApi';
import ListsApi from 'services/ListsApi';
import TasksApi from 'services/TasksApi';

class Board extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      board: {},
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleCreateListClick = this.handleCreateListClick.bind(this);
    this.handleFavoriteCardClick = this.handleFavoriteCardClick.bind(this);
    this.handleCreateTaskList = this.handleCreateTaskList.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const board = await BoardsApi.getBoard(match.params.id);

    this.setState({ board });
    document.title = `${board.title} | Trello`;
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
        ...prevState.board,
        title,
      },
    }));
  }

  async handleCreateListClick() {
    const { match } = this.props;
    const list = await ListsApi.createList(match.params.id, {
      title: 'new list',
    });

    this.setState(prevState => ({
      board: {
        ...prevState.board,
        lists: [...prevState.board.lists, list],
      },
    }));
  }

  handleCreateTaskList(listId) {
    return async () => {
      const {
        board: { lists },
      } = this.state;
      const { match } = this.props;
      const task = await TasksApi.createTask(match.params.id, listId, {
        title: 'new task',
      });

      const listIndex = lists.findIndex(list => list.id === listId);
      const list = lists[listIndex];
      const newList = {
        ...list,
        tasks: [...list.tasks, task],
      };

      this.setState(prevState => ({
        board: {
          ...prevState.board,
          lists: prevState.board.lists
            .slice(0, listIndex)
            .concat(newList)
            .concat(prevState.board.lists.slice(listIndex + 1)),
        },
      }));
    };
  }

  async handleFavoriteCardClick() {
    const { match } = this.props;
    const { board } = this.state;
    const { isFavorited } = await BoardsApi.editBoard(match.params.id, {
      isFavorited: !board.isFavorited,
    });

    this.setState(prevState => ({
      board: {
        ...prevState.board,
        isFavorited,
      },
    }));
  }

  render() {
    const {
      board: { title, lists, isFavorited },
    } = this.state;

    return (
      <Fragment>
        <BoardDescription
          title={title}
          isFavorited={isFavorited}
          onBlur={this.handleBlur}
          onFavoriteClick={this.handleFavoriteCardClick}
        />
        <ListsContainer>
          {!!lists &&
            lists.map(({ id, ...props }) => (
              <List
                key={id}
                onCreateTaskClick={this.handleCreateTaskList(id)}
                {...props}
              />
            ))}
          <NewList onClick={this.handleCreateListClick}>New List</NewList>
        </ListsContainer>
      </Fragment>
    );
  }
}

export default Board;
