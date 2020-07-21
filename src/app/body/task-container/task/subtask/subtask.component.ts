import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {

  constructor() { }

  @Input() subtask;

  @Output() deleteSubtask=new EventEmitter();
  @Output() updateSubtask=new EventEmitter();

  hide=true;

  ngOnInit(): void {
  }

  removeSubtask(){}

}
