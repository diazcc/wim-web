import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarArticle } from './navbar.article';

describe('NavbarArticle', () => {
  let component: NavbarArticle;
  let fixture: ComponentFixture<NavbarArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarArticle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
