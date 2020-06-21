import { SortStatuses } from '../actions';

const sortStatus = (state = SortStatuses.SHOW_ALL, action) => {    
    // console.log(action.type);
    
    if (action.type === 'SET_SORTING_STATUS') {
        console.log(action.status);
        return action.status;
    }
    console.log('no hello');
    return state
}

export default sortStatus;