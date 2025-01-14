import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSiteComponent } from './tasks-site.component';

describe('TasksSiteComponent', () => {
  let component: TasksSiteComponent;
  let fixture: ComponentFixture<TasksSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
