import constate from 'constate';
import { nanoid } from 'nanoid';
import { useEffect, useReducer } from 'react';

type Task = {
  id: string;
  title: string;
  checked: boolean;
};

enum ActionTypeEnum {
  ADD_TASK = 'add_task',
  REMOVE_TASK = 'remove_task',
  SELECT_TASK = 'check_task',
  DESELECT_TASK = 'uncheck_task',
}

const initialValue = JSON.parse(localStorage.getItem('tasks') ?? '[]');

type TaskTitle = {
  title: string;
};

type ActionType = {
  id?: string;
  type: string;
  value?: {
    title: string;
  };
  checked?: boolean;
};

function reducer(state: Task[], action: ActionType) {
  switch (action.type) {
    case ActionTypeEnum.ADD_TASK:
      return [
        ...state,
        { title: action.value?.title ?? '', checked: false, id: nanoid() },
      ];
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
   */
  const createTask = (value: TaskTitle) =>
    dispatch({ type: ActionTypeEnum.ADD_TASK, value });

  /**
   * Exclui uma tarefa existente
   */
  const removeTask = (id: string) =>
    dispatch({ type: ActionTypeEnum.REMOVE_TASK, id });

  /**
   * Marca tarefa como concluída
   */
  const selectTask = (id: string) =>
    dispatch({ type: ActionTypeEnum.SELECT_TASK, id });

  /**
   * Marca tarefa como não-concluída
   */
  const deselectTask = (id: string) =>
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
