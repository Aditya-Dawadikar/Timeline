import { Component, OnInit, Input, Output, EventEmitter,ElementRef ,ViewChild} from '@angular/core';
import {TimelineService} from '../../../services/timeline.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @ViewChild('taskview') taskView:ElementRef;

  @Input() task;
  @Output() removeTaskEmitter=new EventEmitter();

  constructor(private timeline:TimelineService) {
  }

  ngOnInit(): void {
  }

  viewHeight:number;
  ngAfterViewInit(){
    this.viewHeight=this.taskView.nativeElement.offsetHeight;
    setTimeout(()=>{this.send()},1);
  }

  hide=true;

  send(){
    this.timeline.sendHeight(this.viewHeight);
  }

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

  updateSubtaskSection(){
    console.log("updated");
  }

}
