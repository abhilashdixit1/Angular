import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOverviewDialogComponent } from './show-overview-dialog.component';

describe('ShowOverviewDialogComponent', () => {
  let component: ShowOverviewDialogComponent;
  let fixture: ComponentFixture<ShowOverviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOverviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
