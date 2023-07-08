import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductPage } from './adm-product.page';

describe('AdmProductPage', () => {
  let component: AdmProductPage;
  let fixture: ComponentFixture<AdmProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmProductPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
