import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../shared/tasks';
import {Heights} from '../../shared/heights';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.css']
})
export class TaskContainerComponent implements OnInit {

  constructor() { }

  Tasks=TASKS;

  ngOnInit(): void {
  }

  removeTask(task){
    let index= TASKS.indexOf(task);
    TASKS.splice(index,1);
    Heights.splice(index,1);
  }

}
