import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { TaskState } from '../task';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  taskTitle: string;
  taskDescription: string;

  @Output() ontaskadd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTask(event, formValue) {
    event.preventDefault();
    const task: Task = {
      id: -1,
      title: formValue.taskTitle,
      description: formValue.taskDescription,
      creationDate: new Date(),
      isDeleted: false,
      column: TaskState.Todo
    };
    this.taskTitle = "";
    this.taskDescription = "";
    this.ontaskadd.emit(task);
  }

  updateTask(task: Task) {
    
  }

}
