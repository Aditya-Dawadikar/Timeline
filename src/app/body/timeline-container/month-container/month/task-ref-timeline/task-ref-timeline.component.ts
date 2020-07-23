import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-ref-timeline',
  templateUrl: './task-ref-timeline.component.html',
  styleUrls: ['./task-ref-timeline.component.css']
})
export class TaskRefTimelineComponent implements OnInit {

  constructor() { }
  @Input() viewheight:number;

  ngOnInit(): void {

  }

}
