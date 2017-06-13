import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileRecordComponent } from './user-profile-record.component';

describe('UserProfileRecordComponent', () => {
  let component: UserProfileRecordComponent;
  let fixture: ComponentFixture<UserProfileRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
