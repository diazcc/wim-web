import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHomeTemplate } from './adm-home.template';

describe('AdmHomeTemplate', () => {
  let component: AdmHomeTemplate;
  let fixture: ComponentFixture<AdmHomeTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmHomeTemplate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmHomeTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
