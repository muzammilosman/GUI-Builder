import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkboardElementComponent } from './workboard-element.component';

describe('WorkboardElementComponent', () => {
  let component: WorkboardElementComponent;
  let fixture: ComponentFixture<WorkboardElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkboardElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkboardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
