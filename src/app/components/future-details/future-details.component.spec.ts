import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureDetailsComponent } from './future-details.component';

describe('FutureDetailsComponent', () => {
  let component: FutureDetailsComponent;
  let fixture: ComponentFixture<FutureDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureDetailsComponent]
    });
    fixture = TestBed.createComponent(FutureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
