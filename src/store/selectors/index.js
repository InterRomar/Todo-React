import { createSelector } from 'reselect';

import { SortStatuses } from '../actions';

const getSortStatus = state => state.sortStatus.sortStatus;
const getTodos = state => state.todosStore.todos;

export const getSortingTodoList = createSelector(
  [getTodos, getSortStatus],
  (todos, status) => {
    switch (status) {
      case SortStatuses.SHOW_ALL:
        return todos;
      case SortStatuses.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case SortStatuses.SHOW_INCOMPLETED:
        return todos.filter(todo => !todo.completed);
      default:
        throw new Error(`Unknown sorting status ${status}`);
    }
  }
);
