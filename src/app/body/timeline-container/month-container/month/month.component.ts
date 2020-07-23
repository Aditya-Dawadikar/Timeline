import { Component, OnInit, Input } from '@angular/core';
import {Month} from '../../../../shared/month';
import {Heights} from '../../../../shared/heights';
import {TASKS} from '../../../../shared/tasks';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  constructor() {
   }

  @Input() month:Month;

  Weeks=[1,2,3,4,5];
  ngOnInit(): void {
  }

  heights=Heights;
  tasks=TASKS;
  objects=[];

  ngAfterViewInit(){
    setTimeout(() => {
      for(let i=0;i<Heights.length;i++){
        let newObj={
          height:this.heights[i],
          task:this.tasks[i]
        }
        this.objects.push(newObj);
      }
    }, 1);



  }

  count=Heights.length;

  displayWeeks(){
    for(let i=1;i<=this.month.numberOfWeeks;i++){
      this.Weeks.push(i);
    }
  }

}
