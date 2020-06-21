import { combineReducers } from 'redux';
import todos from './todosReducer';
import sortStatus from './sortStatusReducer';

export default combineReducers({
    sortStatus,
    todos,
})