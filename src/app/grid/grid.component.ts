import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DragulaDirective } from 'ng2-dragula/ng2-dragula';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { Task } from '../task';
import { TaskState } from '../task';
import { CrudLocalstorageService } from '../services/crud-localstorage.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges {
  @Input() tasks: Task[];
  todo: string = "1 - A faire";
  today: string = "2 - Aujourd'hui";
  inProgress: string = "3 - En cours";
  done: string = "4 - Fait";
  groups: any[];

  constructor(private dragulaService: DragulaService, private crudLocalstorageService: CrudLocalstorageService) {
    dragulaService.drag.subscribe((value) => { 
      this.onDrag(value.slice(1));
    });

    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });

    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });

      dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });

   }


  ngOnInit() {
    this.fillGrid();
  }

  ngOnChanges() {
    this.fillGrid();
  }

  fillGrid() {
    this.groups = [
      { name: this.todo, items: this.tasksByColumn(this.tasks, TaskState.Todo)}, 
      { name: this.today, items: this.tasksByColumn(this.tasks, TaskState.Today)},
      { name: this.inProgress, items: this.tasksByColumn(this.tasks, TaskState.InProgress)},
      { name: this.done, items: this.tasksByColumn(this.tasks, TaskState.Done)}
    ];  
  }

  private tasksByColumn(tasks: Task[], currentState: TaskState) {
    return tasks.filter(task => task.column === currentState);
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    console.log('onDrop args', args);
    let [e, el] = args;
    console.log(e);
    this.addClass(e, 'ex-moved');
    const destinationColumn = +el.innerText.slice(0,1);
    this.tasks = this.crudLocalstorageService.updateTaskByName(e.innerText, destinationColumn);
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

}
