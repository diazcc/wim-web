import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCategoryPage } from './modify-category.page';

describe('ModifyCategoryPage', () => {
  let component: ModifyCategoryPage;
  let fixture: ComponentFixture<ModifyCategoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCategoryPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
