import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCardComponent } from './favorite-card.component';

describe('FavoriteCardComponent', () => {
  let component: FavoritesCardComponent;
  let fixture: ComponentFixture<FavoritesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesCardComponent]
    });
    fixture = TestBed.createComponent(FavoritesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
