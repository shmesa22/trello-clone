import React from 'react';

import Icon from 'components/Icon';
import {
  ListContainer,
  ListTitle,
  TaskCreate,
} from './styles';

const List = () => (
  <ListContainer>
    <ListTitle>To-Do</ListTitle>
    <TaskCreate>
      <Icon icon="fas fa-plus" /> {' '}
      Add another card
    </TaskCreate>
  </ListContainer>
);

export default List;
