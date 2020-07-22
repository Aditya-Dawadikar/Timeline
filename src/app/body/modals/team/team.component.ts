import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private componentService:SidebarButtonsService,private teamService:TeamService) {
    this.showMembersView();
   }

   @Input() removeMember;

  ngOnInit(): void {
    //render the team window
    this.componentService.componentServiceObservable$.subscribe((team)=>{
      if(team===3){
        this.toggleTeam();
      }
    });

    //add new member to team
    this.teamService.teamServiceObservable$.subscribe((newMember:Member)=>{
      TEAM.push(newMember);
      console.log(TEAM);
      let x=TEAM.length;
      if(x%3==0){
        this.col3.push(TEAM[x-1]);
      }else if(x%3==1){
        this.col1.push(TEAM[x-1]);
      }else{
        this.col2.push(TEAM[x-1]);
      }
    })
  }

  Team=TEAM;
  col1=[];
  col2=[];
  col3=[];

  hide=true;
  teamName="Team1";

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

  removeMemberMethod(member){
    console.log(member);
    let index=this.Team.indexOf(member);
    let f1:boolean;
    let f2:boolean;
    let f3:boolean;
    f1=this.col1.includes(member);
    f2=this.col2.includes(member);
    f3=this.col3.includes(member);

    if(f1){
      let i=this.col1.indexOf(member);
      this.col1.splice(i,1);
    }else if(f2){
      let i=this.col2.indexOf(member);
      this.col2.splice(i,1);
    }else if(f3){
      let i=this.col3.indexOf(member);
      this.col3.splice(i,1);
    }

    this.Team.splice(index,1);
    console.log(this.Team);
  }
}
