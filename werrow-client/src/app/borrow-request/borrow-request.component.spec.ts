import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowRequestComponent } from './borrow-request.component';

describe('BorrowRequestComponent', () => {
  let component: BorrowRequestComponent;
  let fixture: ComponentFixture<BorrowRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
