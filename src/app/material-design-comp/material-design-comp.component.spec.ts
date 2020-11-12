import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignCompComponent } from './material-design-comp.component';

describe('MaterialDesignCompComponent', () => {
  let component: MaterialDesignCompComponent;
  let fixture: ComponentFixture<MaterialDesignCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDesignCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDesignCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
