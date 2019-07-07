import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[Task Component] Add Task',
  props<{name: string; description: string;}>(),
);

export const removeTask = createAction(
  '[Task Component] Remove Task',
  props<{ id: number }>()
);
