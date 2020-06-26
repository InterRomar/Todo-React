import { SortStatuses } from '../actions';

const initialState = {
  sortStatus: SortStatuses.SHOW_ALL
};
const sortStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORTING_STATUS':
      return {
        ...state,
        sortStatus: action.status
      };

    default:
      return state;
  }
};

export default sortStatus;
