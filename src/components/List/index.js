import React from 'react';

import Icon from 'components/Icon';
import Task from 'components/Task';
import { ListContainer, ListTitle, TaskCreate } from './styles';

const List = ({ tasks, title, onCreateTaskClick }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    {!!tasks && tasks.map(({ id, title }) => <Task key={id} title={title} />)}
    <TaskCreate onClick={onCreateTaskClick}>
      <Icon icon="fas fa-plus" /> Add another card
    </TaskCreate>
  </ListContainer>
);

export default List;
