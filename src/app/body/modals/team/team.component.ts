import { Component, OnInit } from '@angular/core';
import {SidebarButtonsService} from '../../../services/sidebar-buttons.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private componentService:SidebarButtonsService) { }

  ngOnInit(): void {
    this.componentService.componentServiceObservable$.subscribe((team)=>{
      if(team===3){
        this.showTeam();
      }
    });
  }

  hide=true;
  teamName="Team1";

  showTeam(){
    this.hide=!this.hide;
  }
}
