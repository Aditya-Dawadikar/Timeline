import { Component, OnInit } from '@angular/core';
import {SidebarButtonsService} from '../../../../services/sidebar-buttons.service';
import {TeamService} from '../../../../services/team.service';

import {TASKS} from '../../../../shared/tasks';
import { TEAM } from 'src/app/shared/team';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(private componentService:SidebarButtonsService,private teamService:TeamService) { }

  ngOnInit(): void {
    this.componentService.componentServiceObservable$.subscribe((member)=>{
      if(member===2){
        this.toggleMember();
      }
    })

    for(let i=0;i<TASKS.length;i++){
      let task =TASKS[i];
      for(let j=0;j<task.subtasks.length;j++){
        let option={
          taskName:task.taskName,
          subtaskName:task.subtasks[j].subtaskName
        }
        this.subtasks.push(option);
      }
    }
  }

  Tasks=TASKS;
  hide=true;
  flag=0;
  subtasks=[];
  newMember={
    name:"",
      isAssigned:true,
      task:"",
      subtask:"",
      assignmentDate:"",
      isComplete:false,
      completionDate:""
  };

  toggleMember(){
    this.hide=!this.hide;
  }

  addNewMember(memberName,Task){
    let taskDetail=Task.split(" ");
    this.newMember={
      name:memberName,
      isAssigned:true,
      task:taskDetail[0],
      subtask:taskDetail[2],
      assignmentDate:"",
      isComplete:false,
      completionDate:""
    }
    console.log(this.newMember);
    this.toggleMember();
    this.flag=1;

    this.teamService.addNewMember(this.newMember);
  }

}
