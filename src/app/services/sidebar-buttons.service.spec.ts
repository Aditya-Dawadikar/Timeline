import { TestBed } from '@angular/core/testing';

import { SidebarButtonsService } from './sidebar-buttons.service';

describe('SidebarButtonsService', () => {
  let service: SidebarButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
