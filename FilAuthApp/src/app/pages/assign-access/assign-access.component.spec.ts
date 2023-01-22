import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignAccessComponent } from './assign-access.component';

describe('AssignAccessComponent', () => {
  let component: AssignAccessComponent;
  let fixture: ComponentFixture<AssignAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
