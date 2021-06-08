import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import TaskItem from '../TaskItem/TaskItem';

/** @type {() => JSX.Element} */
const TasksList = () => {
  const { tasks } = useTasks();

  return (
    <>
      {tasks.map(({ id, ...task }) => {
        return <TaskItem key={id} id={id} {...task} />;
      })}
    </>
  );
};

export default TasksList;
