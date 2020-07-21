import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task;
  @Output() removeTaskEmitter=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  hide=true;

  addSubtask(subtaskName,responsible,assignmentDate,completionDate){
    let newSubtask={
      subtaskName:subtaskName,
      responsible:responsible,
      assignmentDate:assignmentDate,
      completionDate:completionDate
    }
    this.task.subtasks.push(newSubtask);
    this.toggleNewSubtaskSection();
  }

  removeSubtask(subtask){
    let index=this.task.subtasks.indexOf(subtask);
    this.task.subtasks.splice(index,1);
  }

  toggleNewSubtaskSection(){
    this.hide=!this.hide;
  }

}
