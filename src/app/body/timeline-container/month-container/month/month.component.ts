import { Component, OnInit, Input } from '@angular/core';
import {Month} from '../../../../shared/month';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  constructor() { }

  @Input() month:Month;

  ngOnInit(): void {
  }

}
