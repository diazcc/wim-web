import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductsPage } from './featured-products.page';

describe('FeaturedProductsPage', () => {
  let component: FeaturedProductsPage;
  let fixture: ComponentFixture<FeaturedProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedProductsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
