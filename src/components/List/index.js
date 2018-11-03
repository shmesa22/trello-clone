import React from 'react';

import Icon from 'components/Icon';
import Task from 'components/Task';
import { ListContainer, ListTitle, TaskCreate } from './styles';

const List = ({ tasks, title }) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    {!!tasks && tasks.map(({ id, title }) => <Task key={id} title={title} />)}
    <TaskCreate>
      <Icon icon="fas fa-plus" /> Add another card
    </TaskCreate>
  </ListContainer>
);

export default List;
