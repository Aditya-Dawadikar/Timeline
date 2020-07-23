import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private timelineSubject= new Subject();
  timelineObservable$ = this.timelineSubject.asObservable();

  constructor() { }

  sendHeight(height:number){
    this.timelineSubject.next(height);
  }

}
