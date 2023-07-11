import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductPage } from './new-product.page';

describe('NewProductPage', () => {
  let component: NewProductPage;
  let fixture: ComponentFixture<NewProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
