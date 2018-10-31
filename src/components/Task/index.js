import React from 'react';

import {
  TaskContainer,
  TaskInput,
} from './styles';

const Task = ({ title }) => (
  <TaskContainer>
    <TaskInput title={title} />
  </TaskContainer>
);

export default Task;
