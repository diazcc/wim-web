import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArticle } from './menu.article';

describe('MenuArticle', () => {
  let component: MenuArticle;
  let fixture: ComponentFixture<MenuArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuArticle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
