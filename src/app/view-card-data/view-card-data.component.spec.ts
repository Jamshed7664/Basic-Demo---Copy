import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCardDataComponent } from './view-card-data.component';

describe('ViewCardDataComponent', () => {
  let component: ViewCardDataComponent;
  let fixture: ComponentFixture<ViewCardDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCardDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
