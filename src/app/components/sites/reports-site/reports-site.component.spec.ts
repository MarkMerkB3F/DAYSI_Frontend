import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSiteComponent } from './reports-site.component';

describe('ReportsSiteComponent', () => {
  let component: ReportsSiteComponent;
  let fixture: ComponentFixture<ReportsSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
