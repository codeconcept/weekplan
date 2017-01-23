import { Component, OnInit } from '@angular/core';
import { CrudLocalstorageService } from './services/crud-localstorage.service';

import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  tasks: Task[];

  constructor(private crudLocalstorageService: CrudLocalstorageService){}

  ngOnInit() {
    this.tasks = this.crudLocalstorageService.getTasks();
    console.log('AppComponent init', this.tasks);
  }

  updateTasks(task: Task) {
    console.log(task);
    this.crudLocalstorageService.createTask(task);
    this.tasks = [...this.tasks, task]; // this.tasks.push(task);
    console.log(this.tasks);
    
  }
}
