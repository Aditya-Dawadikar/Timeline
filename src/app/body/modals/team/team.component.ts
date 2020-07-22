import { Component, OnInit } from '@angular/core';
import {SidebarButtonsService} from '../../../services/sidebar-buttons.service';
import {TeamService} from '../../../services/team.service';
import {Member} from '../../../shared/member';

import {TEAM} from '../../../shared/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private componentService:SidebarButtonsService,private teamService:TeamService) { }

  ngOnInit(): void {
    //render the team window
    this.componentService.componentServiceObservable$.subscribe((team)=>{
      if(team===3){
        this.toggleTeam();
        this.showMembersView();
      }
    });

    //add new member to team
    this.teamService.teamServiceObservable$.subscribe((newMember:Member)=>{
      TEAM.push(newMember);
      console.log(TEAM);
      this.length2=TEAM.length;
    })

  }

  Team=TEAM;
  col1=[];
  col2=[];
  col3=[];

  hide=true;
  teamName="Team1";
  length1=this.Team.length;
  length2:number;

  toggleTeam(){
    this.hide=!this.hide;
  }

  showMembersView(){
    if(this.Team.length%3==0){
      let size=this.Team.length/3;
      for(let i=0;i<size;i++){
        this.col1.push(this.Team[i]);
        this.col2.push(this.Team[i+size]);
        this.col3.push(this.Team[i+(2*size)]);
      }
    }else if(this.Team.length%3==1){
      let size=Math.floor(this.Team.length/3);
      for(let i=0;i<size;i++){
        this.col1.push(this.Team[i]);
        this.col2.push(this.Team[i+size]);
        this.col3.push(this.Team[i+(2*size)]);
      }
      this.col1.push(this.Team[this.Team.length-1]);
    }else{
      let size=Math.floor(this.Team.length/3);
      for(let i=0;i<size;i++){
        this.col1.push(this.Team[i]);
        this.col2.push(this.Team[i+size]);
        this.col3.push(this.Team[i+(2*size)]);
      }
      this.col1.push(this.Team[this.Team.length-2]);
      this.col2.push(this.Team[this.Team.length-1]);
    }
  }

}
