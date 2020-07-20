import { Component, OnInit } from '@angular/core';
import {SidebarButtonsService} from '../../services/sidebar-buttons.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private componentService:SidebarButtonsService) { }

  ngOnInit(): void {
  }

  task=1;
  member=2;
  team=3;

  showTeam(){
    this.componentService.showTeam(this.team);
  }

  addTask(){
    this.componentService.addTask(this.task);
  }

  addMember(){
    this.componentService.addMember(this.member);
  }
}
