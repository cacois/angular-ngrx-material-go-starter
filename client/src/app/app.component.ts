import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask, removeTask } from './actions/tasks.actions';
import { increment, decrement, reset } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-app';
  count$: Observable<number>;
  tasks$: Observable<any[]>;

  tasks = [
    {
      ID: 1,
      Name: 'Task 1',
      Description: 'Do something!'
    }, {
      ID: 2,
      Name: 'Task 2',
      Description: 'Do it again!'
    }, {
      ID: 3,
      Name: 'Task 3',
      Description: 'Do more stuff?'
    }
  ];

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    this.tasks$ = store.pipe(select('tasks'));
  }

  removeTask(idToRemove: number) {
    console.log('component::removeTask');
    this.store.dispatch(removeTask({ id: idToRemove }));
  }

  addTask(f: NgForm) {
    console.log('component::addTask');
    this.store.dispatch(addTask({ name: f.value.name, description: f.value.description }));
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
