import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeetupComponent } from './list-meetup.component';

describe('ListMeetupComponent', () => {
  let component: ListMeetupComponent;
  let fixture: ComponentFixture<ListMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
