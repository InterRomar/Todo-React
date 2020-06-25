import { SortStatuses } from '../actions';


const sortStatus = (state = SortStatuses.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_SORTING_STATUS':
      return action.status;

    default:
      return state;
  }
};

export default sortStatus;
