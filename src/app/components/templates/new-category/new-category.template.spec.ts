import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategoryTemplate } from './new-category.template';

describe('NewCategoryTemplate', () => {
  let component: NewCategoryTemplate;
  let fixture: ComponentFixture<NewCategoryTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCategoryTemplate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCategoryTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
