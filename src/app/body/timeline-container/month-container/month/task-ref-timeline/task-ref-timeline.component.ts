import { Component, OnInit, Input } from '@angular/core';
import { Heights } from 'src/app/shared/heights';

@Component({
  selector: 'app-task-ref-timeline',
  templateUrl: './task-ref-timeline.component.html',
  styleUrls: ['./task-ref-timeline.component.css']
})
export class TaskRefTimelineComponent implements OnInit {

  constructor() { }
  @Input() viewheight:number;
  @Input() task;
  status=true;
  weeks=[1,2,3,4,5];
  ngOnInit(): void {

  }
}
