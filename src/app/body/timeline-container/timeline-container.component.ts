import { Component, OnInit } from '@angular/core';
import {TimelineService} from '../../services/timeline.service';
import {Heights} from '../../shared/heights';

@Component({
  selector: 'app-timeline-container',
  templateUrl: './timeline-container.component.html',
  styleUrls: ['./timeline-container.component.css']
})
export class TimelineContainerComponent implements OnInit {

  constructor(private timeline:TimelineService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.timeline.timelineObservable$.subscribe((height)=>{
      this.heights.push(height);
      Heights.push(height);
    })
  }

  heights=[];
}
