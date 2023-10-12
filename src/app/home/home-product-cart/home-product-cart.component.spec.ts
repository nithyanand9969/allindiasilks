import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductCartComponent } from './home-product-cart.component';

describe('HomeProductCartComponent', () => {
  let component: HomeProductCartComponent;
  let fixture: ComponentFixture<HomeProductCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProductCartComponent]
    });
    fixture = TestBed.createComponent(HomeProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
