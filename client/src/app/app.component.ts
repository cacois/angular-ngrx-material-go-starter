import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent {
  title = 'client-app';
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

  removeTask(id: number) {
    this.tasks = this
      .tasks
      .filter(task => task.ID !== id);
  }

  addTask(f: NgForm) {
    let maxId = 0;
    for(let task of this.tasks) {
      maxId = task.ID > maxId ? task.ID : maxId;
    }
    this.tasks.push({ID: maxId + 1, Name: f.value.name, Description: f.value.description});
  }
}
