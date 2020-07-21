import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {

  constructor() { }

  @Input() subtask;
  @Input() resonsible;

  @Output() deleteSubtask=new EventEmitter();

  stask=this.subtask;

  ngOnInit(): void {
  }

  removeSubtask(){}
}
