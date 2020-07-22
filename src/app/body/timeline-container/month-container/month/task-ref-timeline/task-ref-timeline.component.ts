import { Component, OnInit } from '@angular/core';
import {TimelineService} from '../../../../../services/timeline.service';

@Component({
  selector: 'app-task-ref-timeline',
  templateUrl: './task-ref-timeline.component.html',
  styleUrls: ['./task-ref-timeline.component.css']
})
export class TaskRefTimelineComponent implements OnInit {

  constructor(private timeline:TimelineService) { }

  ngOnInit(): void {
    this.timeline.timelineObservable$.subscribe((height)=>{
      console.log("inside timeline");
      this.height=height;
      console.log(this.height);
    })
  }

  height;

}
