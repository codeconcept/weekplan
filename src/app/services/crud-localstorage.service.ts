import { Injectable } from '@angular/core';
import { Task } from '../task';
import { TaskState } from '../task'; 

@Injectable()
export class CrudLocalstorageService {
  tasks: Task[] = [];
  key: string = 'tasks';

  constructor() { }

  getTasks(){
    this.tasks = JSON.parse(localStorage.getItem(this.key));
    if(!this.tasks) {
      this.tasks = [];
    }
    return this.tasks;
  }

  createTask(task: Task){
    this.tasks = this.getTasks();
    let id = 1;
    if(this.tasks && this.tasks.length > 0){
      id = this.tasks.length + 1;
    }
    task.id = id;
    this.tasks.push(task);
    this.addToLocalStorage(this.key, this.tasks);
  }

  updateTask(task: Task) {
    let tasksClone =  this.tasks.slice();
    tasksClone = tasksClone.filter(t => t.id !== task.id);
    tasksClone.push(task);
    this.tasks = tasksClone;
    this.addToLocalStorage(this.key, this.tasks);
    return this.tasks;
  }

  updateTaskByName(taskName: string, taskState: TaskState) {
    const filtered = this.tasks.filter(task => task.title.toLowerCase() === taskName.toLowerCase());
    console.log('filtered', filtered);
    let task = filtered[0];
    task.column = taskState;
    return this.updateTask(task);
  }

  addToLocalStorage(key: string, data: Task[]){
    const dataReadyToBeSaved = JSON.stringify(data);
    localStorage.setItem(key, dataReadyToBeSaved);
  }

}
