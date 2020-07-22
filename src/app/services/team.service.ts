import { Injectable } from '@angular/core';
import {Subject,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamSubject=new Subject();
  teamServiceObservable$=this.teamSubject.asObservable();

  constructor() { }

  addNewMember(newMember){
    this.teamSubject.next(newMember);
  }

  deleteMember(){
  }

  assignTask(){
  }

}
