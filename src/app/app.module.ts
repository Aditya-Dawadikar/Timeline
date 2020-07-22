import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TimelineContainerComponent } from './body/timeline-container/timeline-container.component';
import { TaskContainerComponent } from './body/task-container/task-container.component';
import { MonthComponent } from './body/timeline-container/month-container/month/month.component';
import { MonthContainerComponent } from './body/timeline-container/month-container/month-container.component';
import { TaskComponent } from './body/task-container/task/task.component';
import { SubtaskComponent } from './body/task-container/task/subtask/subtask.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { AddTaskComponent } from './body/modals/add-task/add-task.component';
import { AddMemberComponent } from './body/modals/team/add-member/add-member.component';
import { TeamComponent } from './body/modals/team/team.component';
import { MemberComponent } from './body/modals/team/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TimelineContainerComponent,
    TaskContainerComponent,
    MonthComponent,
    MonthContainerComponent,
    TaskComponent,
    SubtaskComponent,
    SidebarComponent,
    AddTaskComponent,
    AddMemberComponent,
    TeamComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
