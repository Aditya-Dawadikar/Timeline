import { Component, OnInit } from '@angular/core';
import {SidebarButtonsService} from '../../../services/sidebar-buttons.service';
import {TASKS} from '../../../shared/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private componentService:SidebarButtonsService) { }

  ngOnInit(): void {
    this.componentService.componentServiceObservable$.subscribe((task)=>{
      if(task===1){
        this.addTaskView();
      }
    })
  }

  hide=true;

  addTaskView(){
    this.hide=!this.hide;
  }

  addTask(taskName:string,startDate,EndDate){
    let newTask={
      taskName:taskName,
      subtasks:[]
    }
    TASKS.push(newTask);
    this.addTaskView();
  }

}
