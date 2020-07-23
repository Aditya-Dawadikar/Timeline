import { Component, OnInit, Input } from '@angular/core';
import {Month} from '../../../../shared/month';
import {Heights} from '../../../../shared/heights';

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
  count=Heights.length;

  displayWeeks(){
    for(let i=1;i<=this.month.numberOfWeeks;i++){
      this.Weeks.push(i);
    }
  }

}
