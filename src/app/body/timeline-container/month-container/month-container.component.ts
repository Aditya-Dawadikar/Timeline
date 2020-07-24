import { Component, OnInit, Input } from '@angular/core';
import {YEAR} from '../../../shared/mock-year';
import {TASKS} from '../../../shared/tasks';
import { TaskComponent } from '../../task-container/task/task.component';

@Component({
  selector: 'app-month-container',
  templateUrl: './month-container.component.html',
  styleUrls: ['./month-container.component.css']
})
export class MonthContainerComponent implements OnInit {

  constructor() {
    this.monthActivationLogic();
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

  monthActivationLogic(){
    for(let i=0;i<TASKS.length;i++){
        let startMonth=TASKS[i].subtasks[0].assignmentDate.getMonth();
        let endMonth=TASKS[i].subtasks[(TASKS[i].subtasks.length-1)].completionDate.getMonth();
        for(let j=startMonth;j<=endMonth;j++){
          if(YEAR[i].active!=true)
          YEAR[i].active=true;
        }
    }
  }
}
