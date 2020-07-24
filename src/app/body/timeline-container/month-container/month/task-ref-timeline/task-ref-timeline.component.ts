import { Component, OnInit, Input } from '@angular/core';
import { Heights } from 'src/app/shared/heights';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-task-ref-timeline',
  templateUrl: './task-ref-timeline.component.html',
  styleUrls: ['./task-ref-timeline.component.css']
})
export class TaskRefTimelineComponent implements OnInit {

  constructor() { }

  @Input() viewheight:number;
  @Input() task;
  @Input() status;

  startDate;
  endDate;

  weeks=[
    {active:status},
    {active:status},
    {active:status},
    {active:status},
    {active:status}
  ];

  ngOnInit(): void {
    /*if(this.status===true){
      this.startDate=this.task.subtasks[0].assignmentDate.getDate();
      this.endDate=this.task.subtasks[(this.task.subtasks.length)-1].completionDate.getDate();
      for(let i=0;i<this.weeks.length;i++){
        let mod1=this.startDate/7;
        let mod2=this.endDate/7;
        for(let j=mod1;j<=mod2;j++){
          this.weeks[j].active=false;
        }
      }
    }*/
  }

  ngAfterViewInit(){

  }
}
