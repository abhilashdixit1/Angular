import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOverviewDialogComponent } from './movie-overview-dialog.component';

describe('MovieOverviewDialogComponent', () => {
  let component: MovieOverviewDialogComponent;
  let fixture: ComponentFixture<MovieOverviewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieOverviewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
