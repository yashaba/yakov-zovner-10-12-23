import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrdayDetailsComponent } from './currday-details.component';

describe('CurrdayDetailsComponent', () => {
  let component: CurrdayDetailsComponent;
  let fixture: ComponentFixture<CurrdayDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrdayDetailsComponent]
    });
    fixture = TestBed.createComponent(CurrdayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
