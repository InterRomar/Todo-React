export const TodoActionTypes = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED'
}
export const SortStatuses = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_INCOMPLETED: 'SHOW_INCOMPLETED',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
}

let idCount = 0;

export const addTodo = text => ({
    type: TodoActionTypes.ADD_TODO,
    id: idCount++,
    text 
});

export const deleteTodo = id => ({
    type: TodoActionTypes.DELETE_TODO,
    id
});

export const clearCompleted = () => ({
    type: TodoActionTypes.CLEAR_COMPLETED,
});

export const toggleTodo = id => ({
    type: TodoActionTypes.TOGGLE_TODO,
    id
});
export const setSortStatus = status => ({
    type: 'SET_SORTING_STATUS',
    status
})
