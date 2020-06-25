import { SortStatuses } from '../actions';

const sortStatus = (state = SortStatuses.SHOW_ALL, action) => {
  if (action.type === 'SET_SORTING_STATUS') {
    return action.status;
  }
  return state;
};

export default sortStatus;
