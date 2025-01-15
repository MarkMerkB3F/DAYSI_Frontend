import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSiteComponent } from './notes-site.component';

describe('NotesSiteComponent', () => {
  let component: NotesSiteComponent;
  let fixture: ComponentFixture<NotesSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
