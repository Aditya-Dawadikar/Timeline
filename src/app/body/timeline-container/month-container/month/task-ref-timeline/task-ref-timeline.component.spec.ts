import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRefTimelineComponent } from './task-ref-timeline.component';

describe('TaskRefTimelineComponent', () => {
  let component: TaskRefTimelineComponent;
  let fixture: ComponentFixture<TaskRefTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRefTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRefTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
