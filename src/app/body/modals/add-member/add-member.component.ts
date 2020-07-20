import { Component, OnInit } from '@angular/core';
import {SidebarButtonsService} from '../../../services/sidebar-buttons.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(private componentService:SidebarButtonsService) { }

  ngOnInit(): void {
    this.componentService.componentServiceObservable$.subscribe((member)=>{
      if(member===2){
        this.addMember();
      }
    })
  }

  hide=true;
  addMember(){
    this.hide=!this.hide;
  }

}
