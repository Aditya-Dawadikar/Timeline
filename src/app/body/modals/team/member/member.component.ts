import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor() { }

  @Input() member;
  @Output() removeMemberEvent=new EventEmitter();

  ngOnInit(): void {
  }

}
