import { Component, OnInit, Input } from '@angular/core';
import {YEAR} from '../../../shared/mock-year';

@Component({
  selector: 'app-month-container',
  templateUrl: './month-container.component.html',
  styleUrls: ['./month-container.component.css']
})
export class MonthContainerComponent implements OnInit {

  constructor() {
    for(let i=0;i<12;i++){
      let weekCount=this.weeksCount(2020,i+1);
      if(weekCount>=5){
        YEAR[i].numberOfWeeks=5;
      }else{
        YEAR[i].numberOfWeeks=weekCount;
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }

  Year=YEAR;

  weeksCount(year, month_number) {
    var firstOfMonth = new Date(year, month_number - 1, 1);
    var day = firstOfMonth.getDay() || 6;
    day = day === 1 ? 0 : day;
    if (day) { day-- }
    var diff = 7 - day;
    var lastOfMonth = new Date(year, month_number, 0);
    var lastDate = lastOfMonth.getDate();
    if (lastOfMonth.getDay() === 1) {
        diff--;
    }
    var result = Math.ceil((lastDate - diff) / 7);
    return result + 1;
  };

}
