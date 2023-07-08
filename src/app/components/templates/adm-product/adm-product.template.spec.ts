import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProductTemplate } from './adm-product.template';

describe('AdmProductTemplate', () => {
  let component: AdmProductTemplate;
  let fixture: ComponentFixture<AdmProductTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmProductTemplate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmProductTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
