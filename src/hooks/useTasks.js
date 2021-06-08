import constate from 'constate';
import { nanoid } from 'nanoid';
import { useEffect, useReducer } from 'react';

const ActionTypeEnum = {
  ADD_TASK: 'add_task',
  REMOVE_TASK: 'remove_task',
  SELECT_TASK: 'check_task',
  DESELECT_TASK: 'uncheck_task',
};

const initialValue = JSON.parse(localStorage.getItem('tasks') ?? '[]');

function reducer(state, action) {
  switch (action.type) {
    case ActionTypeEnum.ADD_TASK:
      return [...state, { ...action.value, checked: false, id: nanoid() }];
    case ActionTypeEnum.REMOVE_TASK:
      return state.filter(({ id: taskId }) => taskId !== action.id);
    case ActionTypeEnum.SELECT_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          task['checked'] = true;
        }
        return task;
      });
    case ActionTypeEnum.DESELECT_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          task['checked'] = false;
        }
        return task;
      });
    default:
      throw new Error(
        "The provided action it's not a value from ActionTypeEnum"
      );
  }
}

const [TasksProvider, useTasks] = constate(() => {
  const [tasks, dispatch] = useReducer(reducer, initialValue);

  /**
   * Cria uma nova tarefa
   * @param {{
   *    title: string;
   * }} value
   */
  const createTask = (value) =>
    dispatch({ type: ActionTypeEnum.ADD_TASK, value });

  /**
   * Exclui uma tarefa existente
   * @param {string} id
   */
  const removeTask = (id) => dispatch({ type: ActionTypeEnum.REMOVE_TASK, id });

  /**
   * Marca tarefa como concluída
   * @param {string} id
   */
  const selectTask = (id) => dispatch({ type: ActionTypeEnum.SELECT_TASK, id });

  /**
   * Marca tarefa como não-concluída
   * @param {string} id
   */
  const deselectTask = (id) =>
    dispatch({ type: ActionTypeEnum.DESELECT_TASK, id });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,
    createTask,
    removeTask,
    selectTask,
    deselectTask,
  };
});

export { TasksProvider, useTasks };
