import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOrganism } from './category.organism';

describe('CategoryOrganism', () => {
  let component: CategoryOrganism;
  let fixture: ComponentFixture<CategoryOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
