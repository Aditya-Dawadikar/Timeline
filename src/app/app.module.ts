import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TimelineContainerComponent } from './body/timeline-container/timeline-container.component';
import { TaskContainerComponent } from './body/task-container/task-container.component';
import { MonthComponent } from './body/timeline-container/month/month.component';
import { MonthContainerComponent } from './body/timeline-container/month-container/month-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TimelineContainerComponent,
    TaskContainerComponent,
    MonthComponent,
    MonthContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
