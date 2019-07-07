import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { tasksReducer } from './tasks.reducer';
import { environment } from '../../environments/environment';

export interface State {
  tasks: any[];
  count: number;
}

export const reducers: ActionReducerMap<State> = {
  tasks: tasksReducer,
  count: counterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
