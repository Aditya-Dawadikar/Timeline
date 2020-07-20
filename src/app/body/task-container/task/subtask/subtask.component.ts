import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {

  constructor() { }

  @Input() subtask;
  @Input() resonsible;

  ngOnInit(): void {
  }

}
