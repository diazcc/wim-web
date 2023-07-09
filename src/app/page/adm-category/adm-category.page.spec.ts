import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategoryPage } from './adm-category.page';

describe('AdmCategoryPage', () => {
  let component: AdmCategoryPage;
  let fixture: ComponentFixture<AdmCategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCategoryPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
