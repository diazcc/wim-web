import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductTemplate } from './new-product.template';

describe('NewProductTemplate', () => {
  let component: NewProductTemplate;
  let fixture: ComponentFixture<NewProductTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductTemplate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
