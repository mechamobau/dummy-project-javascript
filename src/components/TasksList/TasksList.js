import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { nanoid } from 'nanoid';

const tasksMock = [
  {
    id: nanoid(),
    title: 'Fazer café',
    checked: true,
  },
  {
    id: nanoid(),
    title: 'Criar capítulo de Frontend',
    checked: false,
  },
];

const TasksList = () => {
  return tasksMock.map(({ id, ...task }) => {
    return <TaskItem key={id} id={id} {...task} onTaskCheck={console.log} />;
  });
};

export default TasksList;
