import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarButtonsService {

  private componentSubject=new Subject();
  componentServiceObservable$=this.componentSubject.asObservable();

  constructor() { }

  showTeam(team){
    this.componentSubject.next(team);
  }

  addTask(task){
    this.componentSubject.next(task);
  }

  addMember(member){
    this.componentSubject.next(member);
  }
}
