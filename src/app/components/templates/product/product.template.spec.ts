import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplate } from './product.template';

describe('ProductTemplate', () => {
  let component: ProductTemplate;
  let fixture: ComponentFixture<ProductTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTemplate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
