import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSiteComponent } from './calendar-site.component';

describe('CalendarSiteComponent', () => {
  let component: CalendarSiteComponent;
  let fixture: ComponentFixture<CalendarSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
