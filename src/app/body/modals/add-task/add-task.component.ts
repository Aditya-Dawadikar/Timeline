import { Component, OnInit } from '@angular/core';
import {SidebarButtonsService} from '../../../services/sidebar-buttons.service';

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
        this.addTask();
      }
    })
  }

  hide=true;
  addTask(){
    this.hide=!this.hide;
  }
}
