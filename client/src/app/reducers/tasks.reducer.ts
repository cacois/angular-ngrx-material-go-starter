import { createReducer, on } from '@ngrx/store';
import { addTask, removeTask } from '../actions/tasks.actions';

export const initialState = [];

export const tasksReducer = createReducer(initialState,
  on(addTask, (state, {name, description}) => {
    console.log('reducer::addTask');
    let maxId = 0;
    // find current highest task ID
    for (const task of state) {
      maxId = task.ID > maxId ? task.ID : maxId;
    }
    console.log([...state, {ID: maxId + 1, Name: name, Description: description}]);
    return [...state, {ID: maxId + 1, Name: name, Description: description}];
  }),
  on(removeTask, (state, {id}) => {
    console.log('reducer::removeTask');
    return state.filter(task => task.ID !== id);
  })
);
