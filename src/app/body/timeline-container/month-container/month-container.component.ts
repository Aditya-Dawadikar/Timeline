import { Component, OnInit } from '@angular/core';
import {YEAR} from '../../../shared/mock-year';

@Component({
  selector: 'app-month-container',
  templateUrl: './month-container.component.html',
  styleUrls: ['./month-container.component.css']
})
export class MonthContainerComponent implements OnInit {

  constructor() {}

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

}
